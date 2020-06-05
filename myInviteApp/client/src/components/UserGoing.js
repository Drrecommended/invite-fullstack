import React, { useEffect } from 'react';
import { useInvite } from '../hooks'
import '../styles/Example.css'


export default () => {
  const { usersGoing, goingUsers } = useInvite()
  useEffect(() => {
    goingUsers()
  }, [])
  return (
    <div className="Example">
      {usersGoing.map(user => {
        return (
          <div className="app">
          <div>
            <div className="image-div">
              <img className="user-image" src={user.picture}  alt="userpic"/>
            </div>
            <div className="info"><strong>Name:</strong> {user.first} {user.last}</div>
            <div className="info"><strong>Phone:</strong> {user.phone}</div>
            <div className="info"><strong>Email:</strong> {user.email}</div>
          </div>
      </div>
        )
      })}
   
    </div>
  )
}