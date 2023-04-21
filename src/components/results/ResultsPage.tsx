import { ResultsList } from './ResultsList'
import { ResultCard } from './ResultCard'
import { useResults } from '../../hooks'
import { ResultSkeleton } from '../shared'

import './ResultsPage.css'

export const ResultsPage = () => {
  const { loading, results, searchTerm, selectedResult, setSelectedResult } =
    useResults()

  if (loading) {
    return (
      <div className='results-loading' data-testid='results-skeleton'>
        {[...new Array(4)].map((_item, index) => (
          <ResultSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className='results-page'>
      <div className='results'>
        <ResultsList
          results={results}
          searchTerm={searchTerm}
          setSelectedResult={setSelectedResult}
        />
      </div>

      {selectedResult && (
        <ResultCard
          result={selectedResult}
          setSelectedResult={setSelectedResult}
        />
      )}
    </div>
  )
}

export default ResultsPage
