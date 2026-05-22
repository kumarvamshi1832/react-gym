import { useState } from "react";
import "../styles/Wgwomen.css";
import womenweightgainplan from "./womenweightgainplan";
function Wgwomen() {

  const [day, setday] = useState("mon");
  const [selectedVideo, setSelectedVideo] = useState("");

  return (

    <div className="wl-container">

      {/* DAY BUTTONS */}
      

      <div className="days-buttons">

        <button
          className={day === "mon" ? "active" : ""}
          onClick={() => setday("mon")}
        >
          Mon
        </button>

        <button
          className={day === "tue" ? "active" : ""}
          onClick={() => setday("tue")}
        >
          Tue
        </button>

        <button
          className={day === "wed" ? "active" : ""}
          onClick={() => setday("wed")}
        >
          Wed
        </button>

        <button
          className={day === "thu" ? "active" : ""}
          onClick={() => setday("thu")}
        >
          Thu
        </button>

        <button
          className={day === "fri" ? "active" : ""}
          onClick={() => setday("fri")}
        >
          Fri
        </button>

        <button
          className={day === "sat" ? "active" : ""}
          onClick={() => setday("sat")}
        >
          Sat
        </button>

        <button
          className={day === "sun" ? "active" : ""}
          onClick={() => setday("sun")}
        >
          Sun
        </button>

      </div>


      {/* MAIN CONTENT */}

      <div className="main-content">


        {/* LEFT PANEL */}

        <div className="workout-panel">

          <p className="workout-heading">
            WORKOUT
          </p>

          <div className="workout-title">
            {womenweightgainplan[day].title}
          </div>

          {womenweightgainplan[day].exercises.map((exercise,index) => (

            <div className="exercise-card" key={index}>

              <div className="exercise-name">
                {exercise.name}
              </div>

              <div className="exercise-sets">
                {exercise.sets} x {exercise.reps}
              </div>

               <button
      className="video-btn"
      onClick={() => setSelectedVideo(exercise.video)}
    >
      ▶ Play Video
    </button>

            </div>

          ))}

          {selectedVideo && (

  <div className="video-container">

    <iframe
      width="100%"
      height="400"
      src={selectedVideo}
      title="Workout Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>

  </div>

)}

        </div>


        {/* RIGHT PANEL */}

        <div className="diet-panel">

          <p className="diet-heading">
            DIET PLAN
          </p>


          <div className="meal-block">
            <div className="meal-title">BREAKFAST</div>
            <div className="meal-name">
              {womenweightgainplan[day].breakfast.meal}
            </div>
            <div className="meal-calories">
              {womenweightgainplan[day].breakfast.calories} kcal
            </div>
          </div>


          <div className="meal-block">
            <div className="meal-title">LUNCH</div>
            <div className="meal-name">
              {womenweightgainplan[day].lunch.meal}
            </div>
            <div className="meal-calories">
              {womenweightgainplan[day].lunch.calories} kcal
            </div>
          </div>


          <div className="meal-block">
            <div className="meal-title">SNACKS</div>
            <div className="meal-name">
              {womenweightgainplan[day].snacks.meal}
            </div>
            <div className="meal-calories">
              {womenweightgainplan[day].snacks.calories} kcal
            </div>
          </div>


          <div className="meal-block">
            <div className="meal-title">DINNER</div>
            <div className="meal-name">
              {womenweightgainplan[day].dinner.meal}
            </div>
            <div className="meal-calories">
              {womenweightgainplan[day].dinner.calories} kcal
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Wgwomen;