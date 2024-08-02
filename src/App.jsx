import { Route, Routes } from "react-router-dom";
import { Families } from './pages/Families';
import { FAQ } from './pages/FAQ';
import { Services } from './pages/Services';
import { Policy } from './pages/Policy';
import './App.css'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/families" element={<Families />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/service" element={<Services />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
