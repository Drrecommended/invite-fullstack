import React, { useEffect } from 'react';
import { useInvite } from '../hooks'
import '../styles/Example.css'


export default () => {
  const { user, usersNotGoing, notGoingUsers } = useInvite()
  useEffect(() => {
    notGoingUsers()
  }, [])
  return (
    <div className="Example">
      {usersNotGoing.map(item => {
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