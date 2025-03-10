import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Layout from "./Components/Layout";
import Signup from './Pages/Signup';
import Login from "./Pages/Login";
import EventHub from "./Pages/EventHub";
import CreateNewEvent from "./Pages/CreateEvent";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" exact Component={Signup} />
        <Route path="/login" exact Component={Login} />
        <Route path="/eventhub" exact Component={EventHub} />
        <Route path="/create-event" exact Component={CreateNewEvent} />
      </Routes>
      </Layout>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
