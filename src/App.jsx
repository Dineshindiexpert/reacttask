import { useState } from 'react'
import './App.css'
// Note the curly braces for Template and Container

import Profile, { Template, Container } from './components/profile'
import {Avatarcombo, Avatar,Imagepicker} from './components/task2'

function App() {
  return (
    <>
    <div className="d-flex flex-column justify-content-center ms-5">
      <div>
        <h1>Task 1 is here :</h1>
        <Container/> 
      </div>
      <div>
          <h1>Task 2 is here:</h1>
          <Avatarcombo/>
      </div>
      <div><hr /></div>
      <div>
        <Imagepicker index={0}/>
      </div>
    </div>
      
     
     
       
    </>
  )
}

export default App
