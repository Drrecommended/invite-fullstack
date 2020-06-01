import React, { useEffect } from 'react';
import { useInvite } from '../hooks'
import '../styles/Example.css'

export default () => {
  const { displayUser } = useInvite()
  
  return (
    <div className="Example">
      <h2></h2>
    </div>
  )
}