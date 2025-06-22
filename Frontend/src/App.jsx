import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/utility/Navbar";
import Footer from "./Pages/utility/Footer";
import Home from "./Pages/main/Home";
import About from "./Pages/main/About";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
