import react, { useState, useContext } from "react";
import UserContext from "../context/UserContext";


function Login() {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);
    
    const handlesubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
        console.log("User logged in:", { username, password });
    }

  return (
    <div>
       <h1>Login</h1>
       <input type="text" 
       value = {username}
         onChange={(e) => setUsername(e.target.value)}
       placeholder="Username" />
       {" "}
       <input type="password" 
       value = {password}
         onChange={(e) => setPassword(e.target.value)}
       placeholder="Password" /> 
       <button onClick={handlesubmit}>Login</button>
    </div>
  )
}

export default Login
