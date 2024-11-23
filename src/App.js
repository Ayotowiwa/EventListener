import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Dashboard from "./Pages/Dashboard";
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Dashboard} />
        <Route path="/signup" exact Component={Signup} />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
