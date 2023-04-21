import { type Dispatch, type SetStateAction } from 'react'

import { type Result } from '../../interfaces'

import './ResultItem.css'

interface Props {
  result: Result
  setSelectedResult: Dispatch<SetStateAction<Result | undefined>>
}

export const ResultItem = ({
  result: { description, title, url, ...rest },
  setSelectedResult
}: Props) => {
  return (
    <>
      <div
        className='result-item'
        onClick={() => {
          setSelectedResult({ description, title, url, ...rest })
        }}
      >
        <span className='url'>{url}</span>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
      </div>
    </>
  )
}
