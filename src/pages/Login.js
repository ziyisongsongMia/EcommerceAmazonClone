import { React, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Login.css'
import Axios from 'axios'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //const [user, loading, error] = useAuthState(auth)
  /*  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (loading) {
      console.log(loading)
      return
    }

    if (user) navigate('/layout')
  }, [user, loading])

  const HandleEmailPassword = async (e) => {
    console.log('handle email password')
  } */

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          id="email"
          value={email}
          /*  onChange={(e) => {
            return setEmail(e.target.value)
          }} */
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          id="psw"
          value={password}
          /*  onChange={(e) => setPassword(e.target.value)} */
          placeholder="Password"
        />

        <button
          className="login__btn" /* onClick={()=>console.log("HandleEmailPassword"}} */
        >
          Login
        </button>

        <div>
          Don't have an account? <Link to="/signup">Sign up</Link> now.
        </div>
      </div>
    </div>
  )
}
export default Login
