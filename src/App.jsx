import { useState } from 'react'
import './App.css'
// Note the curly braces for Template and Container

import Profile, { Template, Container } from './components/profile'
import {Avatarcombo, Avatar} from './components/task2'

function App() {
  return (
    <>
    <div className='d-flex flex-column align-items-center position-absolute top-50 start-50 translate-middle' style={{minWidth: '300px'}}>
      <div>
        <h1>Task 1 is here :</h1>
        <Container/> 
      </div>
      <div>
          <h1>Task 2 is here:</h1>
          <Avatarcombo/>
      </div>
    </div>
      
     
     
       
    </>
  )
}

export default App
