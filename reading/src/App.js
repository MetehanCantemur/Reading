import { Route, Routes } from "react-router-dom";
import { Home } from "./companents/Home";
import { Navbar } from "./companents/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
