import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./features/User/User";     
import Login from "./Login";
import { Link } from "react-router-dom";   
import "./App.css"
function App() {
  return (
    <div>
    <BrowserRouter>
    <div className="App-Header">
      <h1>My Application</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
