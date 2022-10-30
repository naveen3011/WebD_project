import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Body/Home";
import Catalogue from "./components/Body/Catalogue";
import Navbar from "./components/Header";
import AddStore from "./components/Body/AddStore";
import { Notification } from "./Notification";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/catalogue" element={<><Navbar /><Catalogue /></>} />
          <Route path="/addstore" element={<><Navbar /><AddStore /></>} />


        </Routes>
      </BrowserRouter>
      <Notification />
    </div>
  );
}

export default App;
