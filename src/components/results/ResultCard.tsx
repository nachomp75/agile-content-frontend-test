import { type Dispatch, type SetStateAction } from 'react'

import { type Result } from '../../interfaces'
import { useClickOutside } from '../../hooks'

import './ResultCard.css'

interface Props {
  result: Result
  setSelectedResult: Dispatch<SetStateAction<Result | undefined>>
}

export const ResultCard = ({
  result: { image, title, url, description },
  setSelectedResult
}: Props) => {
  const ref = useClickOutside(() => {
    if (window.innerWidth <= 992) {
      setSelectedResult(undefined)
    }
  })

  return (
    <div className='result-frame'>
      <figure className='result-card' ref={ref}>
        <img src={image} alt={title} />
        <figcaption className='result-caption'>
          <span className='url'>{url}</span>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
        </figcaption>
      </figure>
    </div>
  )
}
