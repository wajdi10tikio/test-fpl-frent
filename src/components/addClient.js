import React, { useState } from 'react'
import Axios from "axios"

function addClient() {
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [type, setType] = useState("")
  const handleAddClient = async () => {

    addClient(password, email)

  }
  const addClient = async (password, email) => {
    try {
      setLoading(true)
      const result = await Axios.post(
        "http://localhost:6100/client/register", { password, email, type })
      console.log(result.data.reverse())
      setLoading(false)
    } catch (e) {
      console.log("error")
    }
  }
  return (
    <div className="app">
      <h1>ADD CLIENT</h1>
      <label>Email</label>
      &nbsp;
      <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      &emsp;
      <label>Password</label>
      &nbsp;
      <input className="input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      &emsp;
      <label>Type</label>
      &nbsp;
      <select
        showSearch
        style={{ width: 100 }}
        optionFilterProp="children"
        onChange={(value) => setType(value)}
      >
        <option value="Naormal">Normal</option>
        <option value="Abonne">Abonne</option>
      </select>
      &nbsp;
      <button type="primary" onClick={handleAddClient}>
        Add client
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default addClient
