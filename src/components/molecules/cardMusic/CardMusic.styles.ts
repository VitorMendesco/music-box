import { css } from '@emotion/css'

export const base = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '410px',
  fontSize: '0.8rem',
  color: '#222',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 0px rgba(14, 207, 117, 0.75)',
  transition: 'all 0.2s ease-in-out',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0px 0px 20px 1px rgba(29, 255, 97, 1)',
  },

  '& span': {
    fontSize: '0.8rem',
    color: '#AAA',
  },
})

export const imgClass = css({
  width: '100%',
  backgroundSize: 'cover',
})

export const content = css({
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})
