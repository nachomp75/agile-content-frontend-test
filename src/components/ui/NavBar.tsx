import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useSearch } from '../../hooks'
import { routes } from '../../router/routes'
import { TextField } from '../shared'

import agileLogo from '../../assets/agile-content-logo.webp'
import userLogo from '../../assets/user.jpg'
import './UI.css'

export const NavBar = () => {
  const {
    searchValue,
    setSearchValue,
    handleInputChange,
    handleSubmitOnEnter
  } = useSearch()
  const [mode, setMode] = useState<'default' | 'innerSearcher'>('default')
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname.includes(routes[0].path)) {
      setMode('default')
    } else {
      setMode('innerSearcher')
    }
  }, [pathname])

  return (
    <nav>
      {mode === 'default' ? (
        <Link to='/search'>
          <strong>Agile Content&nbsp;</strong>
          Frontend Test
        </Link>
      ) : (
        <>
          <Link to='/search'>
            <img src={agileLogo} alt='Agile Content Logo' />
          </Link>
          <TextField
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleInputChange={handleInputChange}
            handleSubmitOnEnter={handleSubmitOnEnter}
          />
        </>
      )}
      <img src={userLogo} alt='User profile image' />
    </nav>
  )
}
