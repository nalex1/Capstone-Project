import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import About from "./components/About";
import registration from "./components/registration";
import Home from "./pages/Home";

export default function App() {
  return (
    
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<registration />} />
      </Routes>
    </Layout>
   
  );
}