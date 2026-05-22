import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  const cartItems = useSelector((state) => state.cart);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      <div className="logo">
        GYM<span>FIT</span>
      </div>

      {/* USER SECTION */}
      <div>
        {user ? (
          <>
            <span>Welcome {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/workouts">Workouts</Link></li>
        <li><Link to="/trainingplan">Training Plan</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/community">Community</Link></li>

        {/* REMOVE LOGIN if user already logged in */}
        {!user && <li><Link to="/login">Login</Link></li>}

        {!user && <li><Link to="/register">Register</Link></li>}

        <li>
          <Link to="/cart">
            🛒 Cart ({cartQuantity})
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;