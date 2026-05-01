import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <h1 className="site-logo">Super Wacky Fun Times Fantasy Football League Hub</h1>

        <div className="site-nav-links">
          <Link to="/">Home</Link>
          <Link to="/manager-history">Manager History</Link>
          <Link to="/records">Records</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;