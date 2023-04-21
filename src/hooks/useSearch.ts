import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const useSearch = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()

    const searchText = searchValue.trim()
    navigate(`/results${searchText && `?q=${searchText}`}`)
  }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value)
  }

  const handleSubmitOnEnter = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') handleSubmit()
  }

  useEffect(() => {
    const term = search.split('=')[1]
    setSearchValue(term || '')
  }, [search])

  return {
    searchValue,
    setSearchValue,
    handleInputChange,
    handleSubmitOnEnter,
    handleSubmit
  }
}
