import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SummaryPage from "./pages/SummaryPage";
import AcountsPage from "./pages/AcountsPage";
import RemovePage from "./pages/RemovePage";
import MergePage from "./pages/MergePage";


export default function App() { 
  
  function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no"; 
}
unloadScrollBars();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/acounts" element={<AcountsPage />} />
        <Route path="/remove" element={<RemovePage />} />
        <Route path="/merge" element={<MergePage />} />
      </Routes>    
    </BrowserRouter>
  );
}
