import { Routes, Route } from "react-router-dom";

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

import Wlmen from "./Pages/Wlmen";
import Wgwomen from "./Pages/Wgwomen";
import Wgmen from "./Pages/Wgmen";
import Wlwomen from "./Pages/Wlwomen";
import Cart from "./Pages/Cart";
import Wlcart from "./Pages/Wlcart";

function App() {
  
  return (
    <>
    
      <Navbar />

      <Routes>

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
        <Route path="/cart" element={<Cart/>}/>

        <Route path="/wl-women" element={<Wlwomen />} />
        <Route path="/wl-men" element={<Wlmen />} />
        <Route path="/wg-women" element={<Wgwomen />} />
        <Route path="/wg-men" element={<Wgmen />} />
        <Route path="/wlcart" element={<Wlcart />} />

      </Routes>

    </>

  );
  
}

export default App;