'use client'
import { useReducer } from 'react'
import CharacterReducer from './CharacterReducer'
import CharacterContext from './CharacterContext'
import axios from 'axios'
import { GET_CHARACTERS, SET_CHARACTER, SET_LOADING } from './types'

const CharacterState = (props) => {
  const initialState = {
    selectedCharacter: null,
    characters: [],
    isLoading: false,
  }

  const [state, dispatch] = useReducer(CharacterReducer, initialState)
  
  const getCharacters = async () => {
    dispatch({ type: SET_LOADING, payload: true })
    const apikey = '0ca22638568befcce637c151bccaec4c'
    const hash = '693fc16ad01f23d05cd7aea8c7c8b880'
    const baseUrl = 'https://gateway.marvel.com/v1/public'
    const apiUrl = new String()
      .concat(baseUrl, '/characters?ts=1&apikey=')
      .concat(apikey, '&hash=')
      .concat(hash)

    const res = await axios.get(apiUrl)
    dispatch({ type: SET_LOADING, payload: false })
    dispatch({ type: GET_CHARACTERS, payload: res.data.data.results })
  }

  const setSelectedCharacter = (character) => dispatch({ type: SET_CHARACTER, payload: character })

  return (
    <CharacterContext.Provider value={{
      characters: state.characters,
      selectedCharacter: state.selectedCharacter,
      isLoading: state.isLoading,
      getCharacters,
      setSelectedCharacter,
    }}>
      {props.children}
    </CharacterContext.Provider>
  )
}

export default CharacterState
