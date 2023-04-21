import { renderHook, act } from '@testing-library/react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useSearch } from '../../src/hooks'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLocation: jest.fn()
}))

const useNavigateMock = useNavigate as jest.MockedFunction<typeof useNavigate>
const useLocationMock = useLocation as jest.MockedFunction<typeof useLocation>

describe('useSearch()', () => {
  const navigate = jest.fn()
  const search = '?q=test'

  beforeEach(() => {
    jest.clearAllMocks()
    useNavigateMock.mockReturnValue(navigate)
    useLocationMock.mockReturnValue({
      search,
      state: '',
      key: '',
      pathname: '',
      hash: ''
    })
  })

  it('should initialize with correct states', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.searchValue).toEqual('test')
    expect(typeof result.current.setSearchValue).toBe('function')
    expect(typeof result.current.handleInputChange).toBe('function')
    expect(typeof result.current.handleSubmitOnEnter).toBe('function')
    expect(typeof result.current.handleSubmit).toBe('function')
  })

  it('should call navigate using the last search term as query param when handleSubmit is called', () => {
    const { result } = renderHook(() => useSearch())

    const searchText = 'query'

    act(() => {
      result.current.setSearchValue(searchText)
    })

    act(() => {
      result.current.handleSubmit()
    })

    expect(navigate).toHaveBeenCalledWith(`/results?q=${searchText}`)
  })

  it('should update searchValue when handleInputChange is called', () => {
    const { result } = renderHook(() => useSearch())

    expect(result.current.searchValue).toEqual('test')

    const value = 'updated_test'
    act(() => {
      result.current.handleInputChange({ target: { value } } as any)
    })

    expect(result.current.searchValue).toEqual(value)
  })

  it('should call navigate when handleSubmitOnEnter is called with Enter key', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.handleSubmitOnEnter({ key: 'Enter' } as any)
    })

    expect(navigate).toHaveBeenCalled()
  })

  it('should not call navigate when handleSubmitOnEnter is called with non-Enter key', () => {
    const { result } = renderHook(() => useSearch())

    act(() => {
      result.current.handleSubmitOnEnter({ key: 'Tab' } as any)
      result.current.handleSubmitOnEnter({ key: 'a' } as any)
    })

    expect(navigate).not.toHaveBeenCalled()
  })
})
