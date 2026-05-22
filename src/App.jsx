// React Router
import { Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Workouts from "./Pages/Workouts";
import Trainingplan from "./Pages/Trainingplan";
import Challenges from "./Pages/Challenges";
import Guides from "./Pages/Guides";
import Community from "./Pages/Community";
import Contribute from "./Pages/Contribute";
import Login from "./Pages/Login";
import Orders from "./Pages/Orders";
import Register from "./Pages/Register";

// Product Pages
import Wlmen from "./Pages/Wlmen";
import Wgwomen from "./Pages/Wgwomen";
import Wgmen from "./Pages/Wgmen";
import Wlwomen from "./Pages/Wlwomen";

// Cart Pages
import Cart from "./Pages/Cart";
import Wlcart from "./Pages/Wlcart";

// Global Premium CSS
import "./App.css";

function App() {

  return (

    // Main App Container
    <div className="app-container">

      {/* Top Navigation Bar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/trainingplan" element={<Trainingplan />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contribute" element={<Contribute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Weight Loss Pages */}
        <Route path="/wl-women" element={<Wlwomen />} />
        <Route path="/wl-men" element={<Wlmen />} />

        {/* Weight Gain Pages */}
        <Route path="/wg-women" element={<Wgwomen />} />
        <Route path="/wg-men" element={<Wgmen />} />

        {/* Product Cart */}
        <Route path="/wlcart" element={<Wlcart />} />

      </Routes>

    </div>

  );

}

export default App;