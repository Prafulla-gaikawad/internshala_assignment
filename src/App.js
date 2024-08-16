import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Price from "./components/Price";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/price" element={<Price/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
