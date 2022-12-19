import React from 'react'
import Axios from "axios";

function login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {

    login(email, password)

  }
  const login = async (email, password) => {
    try {
      setLoading(true)
      const result = await Axios.post(
        "http://localhost:6100/login", { email, password })
      console.log(result.data.reverse())
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }
  return (
    <div className="app">
      <h1>Login</h1>
      <label>Email</label>
      &nbsp;
      <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      &emsp;
      <label>Password</label>
      &nbsp;
      <input className="input" placeholder="Email" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default login
