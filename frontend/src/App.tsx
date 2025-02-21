import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import KissaDetail from "./pages/KissaDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kissa/:id" element={<KissaDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
