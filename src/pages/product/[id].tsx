import { stripe } from '@/lib/stripe'
import { ProductProps } from '@/types/product'
import { GetStaticPaths, GetStaticProps } from 'next'

import { useRouter } from 'next/router'
import Stripe from 'stripe'

import { Container, ContentMobile, ContentWeb } from '@/styles/pages/product'
import { ProductWeb } from '@/components/ProductWeb'
import { ProductMobile } from '@/components/ProductMobile'

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <Container>
      <ContentWeb>
        <ProductWeb product={product} />
      </ContentWeb>

      <ContentMobile>
        <ProductMobile product={product} />
      </ContentMobile>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_NU05AWNJg8a0ky' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
