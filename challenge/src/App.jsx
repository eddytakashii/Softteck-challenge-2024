import {useState} from 'react'
import Historico from "./components/Historico"
import Join from "./components/Join"

const App =()=>{

  const [chatVisibility,setChatVisibility]=useState(false)
  const [username,setUsername]=useState('')
  
  return <div>
    {
     chatVisibility ? (<Historico username={username}/> )
     
     :(
     <Join 
     
      setChatVisibility={setChatVisibility}
      setUsername={setUsername}
      />
    )
    }

  </div>
  
}

export default App