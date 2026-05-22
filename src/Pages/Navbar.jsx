import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  const cartItems = useSelector((state) => state.cart || []);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        GYM<span>FIT</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/trainingplan">Training Plan</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/community">Community</Link></li>

        <li>
          <Link to="/cart">🛒 Cart ({cartQuantity})</Link>
        </li>

        {!user ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li><span>Welcome {user.name}</span></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;