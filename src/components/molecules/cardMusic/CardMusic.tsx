import { css } from '@emotion/css'
import { base, content, imgClass } from './CardMusic.styles'

export type CardMusicProps = {
  author: string
  genre: string
  id?: string
  image: string
  name: string
  year: number
}

const CardMusic: React.FC<CardMusicProps> = ({
  author,
  genre,
  image,
  name,
  year,
}) => {
  return (
    <div className={base}>
      <img className={imgClass} src={image} alt={`song ${name} image`} />
      <div className={content}>
        <h2 className={css({ textAlign: 'center' })}>{name}</h2>
        <h3>
          <span>author:</span>
          {author}
        </h3>
        <h4>
          <span>genre:</span>
          {genre}
        </h4>
        <h5>
          <span>year:</span>
          {year}
        </h5>
      </div>
    </div>
  )
}

export default CardMusic
