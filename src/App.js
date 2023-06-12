import {BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SummaryPage from "./pages/SummaryPage";
import AccountsPage from "./pages/AccountsPage";
import RemovePage from "./pages/RemovePage";
import MergePage from "./pages/MergePage";
import MonthlySumPage from "./pages/MonthlySumPage";
import BalancePage from "./pages/BalancePage";
import ExtractPage from "./pages/ExtractPage";
import IncludePage from "./pages/IncludePage";
import EditPage from "./pages/EditPage";
import MovePage from "./pages/MovePage";
import SaveMoneyPage from "./pages/SaveMoneyPage"
import WithdrawalPage from "./pages/WithdrawalPage";
import SavingsPage from "./pages/SavingsPage";


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
        <Route path="/account" element={<AccountsPage />} />
        <Route path="/remove" element={<RemovePage />} />
        <Route path="/merge" element={<MergePage />} />
        <Route path="/monthly" element={<MonthlySumPage />} />
        <Route path="/balance" element={<BalancePage />} />
        <Route path="/extract" element={<ExtractPage />} />
        <Route path="/include" element={<IncludePage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/move" element={<MovePage />} />
        <Route path="/save" element={<SaveMoneyPage />} />
        <Route path="/withdrawal" element={<WithdrawalPage />} />
        <Route path="/savings" element={<SavingsPage />} />
      </Routes>    
    </BrowserRouter>
  );
}
