import React, { useEffect } from 'react';
import { useInvite } from '../hooks'
import '../styles/Example.css'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default () => {
  const { user, usersNotGoing, usersGoing, notGoingUsers, goingUsers, getNewUser, decline, going  } = useInvite()
  useEffect(() => {
    getNewUser()
    notGoingUsers()
    goingUsers()
  }, [])
  return (
    <div className="home-example">
      <div className="attending">
          <div className="going"><Link to="/UserGoing">Going:{usersGoing ? usersGoing.length : 0}</Link></div>
          <div className="notGoing"><Link to="/UserNotGoing">Not Going:{usersNotGoing ? usersNotGoing.length : 0}</Link></div>
      </div>
      <div className="app">
          <div>
            <div className="image-div">
              <img className="user-image" src={user.picture} alt="userpic" />
            </div>
            <div className="info"><strong>Name:</strong> {user.first} {user.last}</div>
            <div className="info"><strong>Phone:</strong> {user.phone}</div>
            <div className="info"><strong>Email:</strong> {user.email}</div>
            <div className="button-div">
              <button onClick={() => decline(user)} className="x-button"><FaTimes /></button >
              <button onClick={() => going(user)} className="check-button"><FaCheck/></button>
            </div>
          </div>
      </div>
    </div>
  )
}