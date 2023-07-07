import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Checkout from './pages/Checkout'
import { Input } from 'antd'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
