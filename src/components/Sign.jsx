import React from 'react'

const Sign = () => {
  return (
    <div>
        <h1>Sign page</h1>
        <form>
            <label>Username:</label>
            <input type="text" name="username"id="username"></input><br></br>
            <label>password</label>
            <input type="password" name="password" id="password"></input><br></br>
            <button variant="outlined">Sign in</button>

            

            
      </form>

     </div>
  )
}

export default Sign