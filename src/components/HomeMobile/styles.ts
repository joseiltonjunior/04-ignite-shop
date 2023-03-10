import { styled } from '@/styles/index'
// import Link from 'next/link'

export const HomeContainer = styled('main', {
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1rem',

    borderRadius: 6,

    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },
})