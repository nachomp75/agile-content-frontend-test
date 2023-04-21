import { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { routes } from './routes'
import { NavBar, Footer } from '../components/ui'

export const AppRouter = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          <Route path='/*' element={<Navigate to={routes[0].path} replace />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}
