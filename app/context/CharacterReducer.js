import { GET_CHARACTERS, SET_CHARACTER, SET_LOADING } from './types'

export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload,
      }
    case SET_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload,
      }
    default:
      return state
  }
}
