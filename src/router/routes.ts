import { lazy, type LazyExoticComponent } from 'react'

type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const HomePage = lazy(() => import('../components/home/HomePage'))
const ResultsPage = lazy(() => import('../components/results/ResultsPage'))

export const routes: Route[] = [
  {
    path: 'search',
    Component: HomePage
  },
  {
    path: 'results',
    Component: ResultsPage
  }
]
