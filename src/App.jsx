import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioSection from "./components/PortfolioSection";
import CreativeAgency from "./Pages/CreativeAgency";

export default function App() {
  return (
    <Router>
      <div className="bg-[#F5F5F5] text-black font-sans">
        <Routes>
          <Route path="/" element={<CreativeAgency />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
        </Routes>
      </div>
    </Router>
  );
}