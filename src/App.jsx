import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/HomePage/Homepage';
import WalletHomePage from './Pages/WalletPage/WalletHomePage';
import SecondSection from './Pages/WalletPage/SecondSection';
import SupportHomePage from './Pages/SupportPage/SupportHomePage';

function App() {
  return (
     <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/business-wallet" element={<WalletHomePage />} />
      <Route path="/support" element={<SupportHomePage />} />
      {/* <Route path="/send-money" element={<SecondSection />} /> */}
    </Routes>
     </Router>

  );
}

export default App;
