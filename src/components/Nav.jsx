import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <div className="brand">
        <NavLink to="/" className="brand-link">Hellpark</NavLink>
      </div>
      <nav className="links">
        <NavLink to="/terms" className="link">서비스 이용 약관</NavLink>
        <NavLink to="/privacy" className="link">개인정보 처리방침</NavLink>
        <NavLink to="/sensitive" className="link">민감정보 처리방침</NavLink>
        <NavLink to="/support" className="link">지원·연락처</NavLink>
      </nav>
    </header>
  );
}