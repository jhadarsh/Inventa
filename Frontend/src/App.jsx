import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/utility/Navbar";
import Footer from "./Pages/utility/Footer";
import Home from "./Pages/main/Home";
import About from "./Pages/main/About";
import Dashboard from "./Pages/main/Dashboard";
import Inventory from "./Pages/main/Inventory";
import Forecast from "./Pages/main/Forecast";
import Delivery from "./Pages/main/Delivery";
import Blockchain from "./Pages/main/Blockchain";


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route path="/delivery" element={<Delivery />} />
           <Route path="/blockchain" element={<Blockchain />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
