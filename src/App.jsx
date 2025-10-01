import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import Sensitive from "./pages/Sensitive.jsx";
import Support from "./pages/Support.jsx";
import NotFound from "./pages/NotFound.jsx";
import PrivacyEn from "./pages/PrivacyEn.jsx";
import SensitiveEn from "./pages/SensitiveEn.jsx";
import SupportEn from "./pages/SupportEn.jsx";
import TermsEn from "./pages/TermsEn.jsx";

export default function App() {
  return (
    <div className="container">
      <Nav />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sensitive" element={<Sensitive />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms-en" element={<TermsEn />} />
          <Route path="/privacy-en" element={<PrivacyEn />} />
          <Route path="/sensitive-en" element={<SensitiveEn />} />
          <Route path="/support-en" element={<SupportEn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} Hellpark · All rights reserved.
      </footer>
    </div>
  );
}