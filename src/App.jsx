import React, { useState,useContext } from 'react'
import UserContext from './context/UserContext'
import FriendList from './components/FriendList'
import GroupList from './components/GroupList'


const App = () => {

  return (
    <div >
      <FriendList />
      <GroupList/>
      
    </div>
  )
}

export default App