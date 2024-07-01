import {useRef} from 'react'

const Join =({setChatVisibility})=>{

    const usernameRef =useRef()

    const handleSubmit =()=>{
        const username = usernameRef.current.value
        if (!username.trim()) return
        console.log('Submit')
        setChatVisibility(true)
    }

    return <div className="flex items-center justify-center min-h-screen bg-slate-600">
        <div className='flex flex-col items-center space-y-4'>
        <label className="text-5xl mb-4 text-black">Join</label>
        <input type="text" ref={usernameRef} placeholder="Digite seu nome de usuario" className="h-16 w-80 px-6 py-2 rounded-full bg-white text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-300"></input>
        <button className="h-10 w-32 rounded bg-amber-300 hover:bg-amber-400 text-black font-semibold" onClick={()=>handleSubmit()}>Clique aqui</button>
        </div>
    </div>
}

export default Join