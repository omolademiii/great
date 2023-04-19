import react from 'react'
import './App.css'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Data from './Database/Data.json'


const App = () => {
  
  return (
    <div  className='main'>
      <Header/>
    
    <div className='user-list'>
      
      {Data.results.map(data => 
      <Profile key = {data.episode_id} userData = {data}  />)}
    </div> 
    </div>

  )
      }

export default App
