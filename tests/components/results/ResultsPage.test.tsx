import { render, screen } from '@testing-library/react'

import ResultsPage from '../../../src/components/results/ResultsPage'
import { useResults } from '../../../src/hooks'
import { type Result } from '../../../src/interfaces'

jest.mock('../../../src/hooks/useResults')

const useResultsMock = useResults as jest.MockedFunction<typeof useResults>

describe('<ResultsPage />', () => {
  const resultMock: Result = {
    type: '',
    id: 1,
    url: '',
    title: 'Bear',
    description: '',
    image: ''
  }

  test('should match snapshot', () => {
    useResultsMock.mockReturnValue({
      loading: true,
      results: [],
      searchTerm: '',
      selectedResult: undefined,
      setSelectedResult: jest.fn()
    })
    const { container } = render(<ResultsPage />)
    expect(container).toMatchSnapshot()
  })

  test('should render results skeleton while loading', () => {
    useResultsMock.mockReturnValue({
      loading: true,
      results: [],
      searchTerm: '',
      selectedResult: undefined,
      setSelectedResult: jest.fn()
    })
    render(<ResultsPage />)

    const resultsSkeleton = screen.getByTestId('results-skeleton')
    expect(resultsSkeleton).not.toBeNull()
  })

  test('should render <ResultsList /> when not loading', () => {
    useResultsMock.mockReturnValue({
      loading: false,
      results: [resultMock],
      searchTerm: '',
      selectedResult: undefined,
      setSelectedResult: jest.fn()
    })
    render(<ResultsPage />)

    const resultsList = screen.getByText(resultMock.title)
    expect(resultsList).not.toBeNull()
  })

  test('should render <ResultCard /> when result is selected', () => {
    useResultsMock.mockReturnValue({
      loading: false,
      results: [resultMock],
      searchTerm: '',
      selectedResult: resultMock,
      setSelectedResult: jest.fn()
    })
    render(<ResultsPage />)

    const resultsList = screen.getAllByRole('figure')
    expect(resultsList).not.toBeNull()
  })
})
