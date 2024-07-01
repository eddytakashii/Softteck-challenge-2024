import {useState} from 'react'
import Historico from "./components/Historico"
import Join from "./components/Join"

const App =()=>{

  const [chatVisibility,setChatVisibility]=useState(false)
  
  return <div>
    {
     chatVisibility ? <Historico/> :<Join setChatVisibility={setChatVisibility}/>
    }

  </div>
  
}

export default App