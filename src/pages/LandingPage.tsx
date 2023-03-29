import { css } from '@emotion/css'
import { useQuery } from 'react-query'

import api from '../libs/services/musics'

import { CardMusic, CardMusicProps } from '@molecules'

const LandingPage = () => {
  const { isLoading, error, data } = useQuery('getMusics', () =>
    api.getMusics()
  )
  return (
    <>
      <div
        className={css({
          width: '100vw',
          minHeight: '100vh',
          padding: 64,
          gap: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <h1>Landing Page</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div
            className={css({
              display: 'flex',

              width: '100%',
              flexWrap: 'wrap',
              gap: 32,
            })}
          >
            {data.map((music: CardMusicProps) => (
              <CardMusic key={music.id} {...music} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default LandingPage
