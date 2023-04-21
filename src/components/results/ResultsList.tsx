import { type Dispatch, type SetStateAction } from 'react'

import { type Result } from '../../interfaces'
import { ResultItem } from './ResultItem'

const NoResults = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <>
      {searchTerm && (
        <p>
          No results found for <strong>{searchTerm}</strong>
        </p>
      )}
      <p>
        Try looking for:&nbsp;
        <strong>
          insect, fish, horse, crocodile, bear, cetacean, cow, lion, cat, snake,
          dog, bird.
        </strong>
      </p>
    </>
  )
}

interface Props {
  results: Result[]
  searchTerm: string
  setSelectedResult: Dispatch<SetStateAction<Result | undefined>>
}

export const ResultsList = ({
  results,
  searchTerm,
  setSelectedResult
}: Props) => {
  return (
    <>
      {results.length === 0 ? (
        <NoResults searchTerm={searchTerm} />
      ) : (
        results.map((result) => (
          <ResultItem
            key={result.id}
            result={result}
            setSelectedResult={setSelectedResult}
          />
        ))
      )}
    </>
  )
}
