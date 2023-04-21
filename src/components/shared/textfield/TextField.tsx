import {
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
  type KeyboardEvent
} from 'react'

import './TextField.css'

interface Props {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  handleInputChange: ({ target }: ChangeEvent<HTMLInputElement>) => void
  handleSubmitOnEnter: ({ key }: KeyboardEvent) => void
}

export const TextField = ({
  searchValue,
  setSearchValue,
  handleInputChange,
  handleSubmitOnEnter
}: Props) => {
  return (
    <div className='textfield'>
      <input
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleSubmitOnEnter}
      />
      {searchValue !== '' && (
        <span
          onClick={() => {
            setSearchValue('')
          }}
        >
          ✖
        </span>
      )}
    </div>
  )
}
