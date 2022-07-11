import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
