import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Tabs from "./pages/Tabs";
import TabDetail from "./pages/TabDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/about" element={<About />} />
          <Route path="/tabs/:id" element={<TabDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
