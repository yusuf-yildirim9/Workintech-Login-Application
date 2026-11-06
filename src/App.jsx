import Login from "./components/Login"
import { useState } from "react"
import Success from "./components/Success"
function App() {
    const [user, setUser] = useState(null);
    return (
      <div>
        {user ? (
          <Success email={user.email} onLogout={() => setUser(null)} />
        ) : (
          <Login onLoginSuccess={(email) => setUser( {email} )} />
        )}
      </div>
    );
    
}

export default App
