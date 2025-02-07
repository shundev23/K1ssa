import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
