import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { getResults } from '../services'
import { type Result } from '../interfaces'

export const useResults = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(false)
  const [selectedResult, setSelectedResult] = useState<Result>()
  const { search } = useLocation()

  useEffect(() => {
    const term = search.split('=')[1]
    setSearchTerm(term)

    if (term) {
      setLoading(true)

      getResults(term)
        .then((results) => {
          setResults(results)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setResults([])
    }
  }, [search])

  return {
    loading,
    results,
    searchTerm,
    selectedResult,
    setSelectedResult
  }
}
