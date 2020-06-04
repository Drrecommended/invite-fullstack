import React, { useEffect } from 'react';
import { useInvite } from '../hooks'
import '../styles/Example.css'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default () => {
  const { user, usersGoing, getNewUser, goingUsers, notGoingUsers, decline, going  } = useInvite()
  useEffect(() => {
    getNewUser()
  }, [])
  return (
    <div className="Example">
      <div className="attending">
          <div><Link to="/UserGoing">Going:{goingUsers.length}</Link></div>
          <div><Link to="/UserNotGoing">Not Going:{notGoingUsers.length}</Link></div>
      </div>
      <div className="app">
          <div>
            <div>
              <img src={user.picture} />
            </div>
            <div>Name: {user.first} {user.last}</div>
            <div>Phone: {user.phone}</div>
            <div>Email: {user.email}</div>
            <div>
              <button onClick={() => decline(user)} className="x-button"><FaTimes /></button >
              <button onClick={() => going(user)} className="check-button"><FaCheck/></button>
            </div>
          </div>
      </div>
    </div>
  )
}