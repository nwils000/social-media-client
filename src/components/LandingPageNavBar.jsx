import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export default function LandingPageNavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="logo-text">Social Media</span>
      </Link>
      <div className="nav-links-wrapper">
        <Link className="nav-link" to="/register">
          Register
        </Link>
        <Link to="/login" className="nav-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}
