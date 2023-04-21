import { TextField } from '../shared'
import { useSearch } from '../../hooks'

import agileLogo from '../../assets/agile-content.png'
import './HomePage.css'

export const HomePage = () => {
  const {
    searchValue,
    setSearchValue,
    handleInputChange,
    handleSubmitOnEnter,
    handleSubmit
  } = useSearch()

  return (
    <form className='home-page' onSubmit={handleSubmit}>
      <img src={agileLogo} alt='Agile Content Logo' />
      <TextField
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleInputChange={handleInputChange}
        handleSubmitOnEnter={handleSubmitOnEnter}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default HomePage
