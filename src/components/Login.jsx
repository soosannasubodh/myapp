import React from 'react'

const Login = () => {
  return (
    <div>
    <h1>login page</h1>
    <form>
  <label htmlFor="name">Name:</label>
  <input type="text" name="name" id="name" placeholder="Enter your name" required />
  <br /><br />

  <label htmlFor="password">Password:</label>
  <input type="password" name="password" id="password" placeholder="Enter your password" required />
  <br /><br />

  <button type="submit">Login</button>
  

</form>
   
    </div>
  )
}

export default Login