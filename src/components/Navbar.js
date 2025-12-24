import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>StayHealthy</h2>
      <Link to="/">Home</Link>
      <Link to="/doctors">Doctors</Link>
      <Link to="/appointment">Appointments</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;
