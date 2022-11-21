import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cliente from "./pages/Cliente";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cliente" element={<Cliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
