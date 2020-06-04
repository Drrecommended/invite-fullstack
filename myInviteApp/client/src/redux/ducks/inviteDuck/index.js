// 1. imports
import axios from 'axios'
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const GET_USER = "example/GET_USER"
const GET_GOING = "example/GET_GOING"
const GET_DECLINE = "example/GET_DECLINE"


// 3. initial state
const inviteState = {
  currentUser: {},
  going: [{}],
  notGoing: [{}]
  

}

// 4. reducer
export default (state = inviteState, action) => {
  console.log(action)
  switch (action.type) {
    case GET_USER:
      return { ...state, currentUser: action.payload }
    case GET_GOING:
      return { ...state, going: inviteState.going }
    case GET_DECLINE:
        return { ...state, notGoing: inviteState.notGoing }
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

function getGoingUser() {
  console.log('called')
  return dispatch => {
    axios.get('/api/going').then(resp => {
      dispatch({
        type: GET_GOING,
        payload: resp.going
      })
      console.log('called inside axios')
      dispatch(getUserData())
    })
  }
}

function getNotGoingUser() {
  return dispatch => {
    axios.get('/api/not-going').then(resp => {
      dispatch({
        type: GET_DECLINE,
        payload: resp.data
      })
      dispatch(getUserData())
    })
  }
}

function userGoing(user) {
  return dispatch => {
    const newUser = { ...user, going: true }
    axios.post('/api/add-user', newUser).then(resp => {
      dispatch(getUserData())
    })
  }
}

function userDecline(user) {
  return dispatch => {
    const newUser = { ...user, going: false }
    axios.post('/api/add-user', newUser).then(resp => {
      dispatch(getUserData())
    })
  }
}



// 6. custom hook
export function useInvite() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.inviteState.currentUser)
  const usersGoing = useSelector(appState => appState.inviteState.going)
  const usersNotGoing = useSelector(appState => appState.inviteState.notGoing)
  const getNewUser = () => dispatch(getUserData())

  const going = (user) => dispatch(userGoing(user))
  const decline = (user) => dispatch(userDecline(user))
  const goingUsers = (user) => dispatch(getGoingUser(user))
  const notGoingUsers = (user) => dispatch(getNotGoingUser(user))




  return { 
    user, 
    usersGoing,
    usersNotGoing,
    goingUsers, 
    notGoingUsers, 
    getNewUser, 
    going, 
    decline }
}
