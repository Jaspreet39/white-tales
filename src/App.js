import "./App.scss";
import HomeScreen from "./Component/HomeScreen";
import Bottom from "./Screen/Bottom";
import Home from "./Screen/Home";
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import LoginScreen from "./Screen/LoginScreen";
import Dashboard from "./Screen/Dashboard";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/adminlogin" element={<LoginScreen/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
   </Router>
  );
}

export default App;
