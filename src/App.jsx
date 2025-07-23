import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/HomePage/Homepage';
import WalletHomePage from './Pages/WalletPage/WalletHomePage';
import SupportHomePage from './Pages/SupportPage/SupportHomePage';
import Login from './Components/Login';
import ContactForm from './Pages/HomePage/Contactform';
import Legalhomepage from './Pages/LegalPage/Legalhomepage';
import Abouttwo from './Pages/AboutPage/Abouttwo';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/business-wallet" element={<WalletHomePage />} />
        <Route path="/support" element={<SupportHomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/legal-information" element={<Legalhomepage />} />
        <Route path="/about-us" element={<Abouttwo />} />
      </Routes>
    </Router>

  );
}

export default App;
