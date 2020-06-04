import React, { useEffect } from 'react';
import { useInvite } from '../hooks'
import '../styles/Example.css'


export default () => {
  const { user, usersGoing, goingUsers } = useInvite()
  useEffect(() => {
    goingUsers()
  }, [])
  return (
    <div className="Example">
      {usersGoing.map(item => {
        return (
          <div className="app">
          <div>
            <div>
              <img src={user.picture} />
            </div>
            <div>Name: {user.first} {user.last}</div>
            <div>Phone: {user.phone}</div>
            <div>Email: {user.email}</div>
          </div>
      </div>
        )
      })}
   
    </div>
  )
}