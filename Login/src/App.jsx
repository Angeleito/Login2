import { useState } from 'react'
import appFirebase from './Credenciales'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Login from './components/Login'
import Home from './components/Home'

const auth = getAuth(appFirebase)

function App() {

  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (userFirebase)=>{
    if(userFirebase){
      setUser(userFirebase)
    }else{
      setUser(null)
    }
  })

  return (
    <>
      <div>
        {user ? <Home emailUser = {user.email}/> : <Login/>}
      </div>
    </>
  )
}

export default App
