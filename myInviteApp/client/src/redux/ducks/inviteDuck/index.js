// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_USER = "example/GET_USER"
const USER_GOING = "example/USER_GOING"
const USER_DECLINE = "example/USER_DECLINE"


// 3. initial state
const inviteState = {
  currentUser: {},
  notGoing: [{}],
  going: [{}]

}

// 4. reducer
export default (state = inviteState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, currentUser: action.payload }
    // case USER_GOING:
    //   return { ...state, example: initialState.example }
    // case USER_DECLINE:
    //     return { ...state, }
    default:
      return state
  }
}

// 5. action creator



function getUserData() {
  return dispatch => {
    axios.get('/api').then(resp => {
      dispatch({
        type: GET_USER,
        payload: resp.data
      })
    })
  }
}



// 6. custom hook
export function useInvite() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.inviteState.currentUser)

  const displayUser = () => dispatch(getUserData())
  // const asyncaction = () => dispatch(someAsyncAction())
  // const reset = () => dispatch(resetAction())
  // const getExample = () => dispatch(getExampleData())

  useEffect(() => {
    console.log("mounting component")
  }, [])

  return { displayUser }
}
