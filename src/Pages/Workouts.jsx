import { useNavigate } from "react-router-dom";
import "../styles/workouts.css";

function Workouts() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Workouts Plan</h1>

      <div className="workout-container">

       {/* Weight Loss Women */}
       <div className="card women">
        <img src="/images/gym/weight-loss women.png" alt="Weight Loss Women" />
        <h3>Weight Loss</h3>
        <h2>women</h2>
        <p>Burn fat, build lean muscle and get a toned body.</p>
        <button onClick={() => navigate("/wl-women")}>
          Open Plan➡️
          </button>
          </div>
          
          {/* Weight Loss Men */}
          <div className="card men">
            <img src="/images/gym/weight loss men.png" alt="Weight Loss Men" />
            <h3>Weight Loss </h3>
            <h2>men</h2>
            <p>Burn fat, improve strength and get a lean physique.</p>
            <button onClick={() => navigate("/wl-men")}>
              Open Plan➡️
              </button>
              </div>
              
              {/* Weight Gain Women */}
              <div className="card women">
                <img src="/images/gym/weight gain women.png" alt="Weight Gain Women" />
                <h3>Weight Gain </h3>
                <h2>women</h2>
                <p>Build strength, gain healthy mass and increase muscles.</p>
                <button onClick={() => navigate("/wg-women")}>
                  Open Plan➡️
                  </button>
                  </div>
                  
                  {/* Weight Gain Men */}
                  <div className="card men">
                    <img src="/images/gym/weight gain men.png" alt="Weight Gain Men" />
                    <h3>Weight Gain </h3>
                    <h2>men</h2>
                    <p>Build muscle, increase strenght and boost your performance.</p>
                    <button onClick={() => navigate("/wg-men")}>
                      Open Plan➡️
                      </button>
                      </div>
                      </div>
      </>
  );
}

export default Workouts;