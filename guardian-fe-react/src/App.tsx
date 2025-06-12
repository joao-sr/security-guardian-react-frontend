import './App.css'

function LoginComponent(){
  return(
  <div>
    <form method="post">
      <div>
        <label htmlFor="uname">Username</label>
        <input type="text" placeholder="Enter username" name="uname" required />
        <label htmlFor='pwd'>Password</label>
        <input type="password" placeholder="Enter password" name="pwd" required />
        <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked={true} name="remember" /> Remember me
    </label>
      </div>
      <div>
        <button type="button">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
  );  
}

function App() {
  return (
    <>
      <LoginComponent />
    </>
  )
}

export default App
