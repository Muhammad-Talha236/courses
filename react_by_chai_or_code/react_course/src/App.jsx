import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/Card'
import Hero from './components/Hero'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  
  const addvalue = ()=>{
    count = count+1;
    setCount(count);
  }
  const devalue = ()=>{
    if(count <= 0){
      setCount(0);
    }
    else{
    count = count -1;
    setCount(count);
    }
  }
  let myobj = {
    name: "Ali",
    age: 20
  }
  let arr = [1,3,4]
  return (
      <>
      <Card />
      <Hero />

      <ProfileCard username="Ali"/>
      <ProfileCard username="Talha"/> 
        <h1>Muhammad Talha</h1>
      <p>your value is: {count}</p>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={devalue}>decrease value</button>
      </>
  )
}

export default App
