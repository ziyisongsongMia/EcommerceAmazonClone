import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const register = (e) => {
    console.log('signup')
  }

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={email}
          //onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          //onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <input
          type="password"
          className="register__textBox"
          value={password}
          //onChange={(e) => setPassword(e.target.value)}
          placeholder="Confirm Password"
        />

        <button className="register__btn" onClick={register}>
          Register
        </button>
      </div>
    </div>
  )
}
export default Signup
