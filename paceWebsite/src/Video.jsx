import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Vid1 from "./assets/ChlorophylTimeLapse.mp4"; // Ensure the path is correct
import NavbarComponent from "./NavbarComponent";

const Video = () => {
  return (
    <>
    <NavbarComponent/>
    <div style={{ padding: "20px" , backgroundColor: "#4888f0"}}>
      {/* PACE Timelapse Section */}
      <div style={{ 
        maxWidth: "900px", 
        margin: "20px auto", 
        padding: "20px", 
        backgroundColor: "#1c1e21", 
        color: "#fff", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" 
      }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "15px" }}>
          PACE Data Timelapse
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "1rem" }}>
          Watch the timelapse of PACE's data showing changes over time.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <video controls style={{ width: "100%", borderRadius: "10px" }}>
            <source src={Vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div style={{ 
        maxWidth: "1200px", 
        margin: "20px auto", 
        padding: "20px", 
        backgroundColor: "#2d2f31", 
        color: "#fff", 
        borderRadius: "10px", 
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" 
      }}>
        <h2 style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "15px" }}>
          DIY Videos
        </h2>
        <p style={{ textAlign: "center", marginBottom: "20px", fontSize: "1rem" }}>
          Learn and make your own DIY- Projects
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
          {/* YouTube Video 1 */}
          <div style={{ flex: 1 }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/pxC6F7bK8CU?si=zXw1Dj6VCvHuB37m" 
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>

          {/* YouTube Video 2 */}
          <div style={{ flex: 1 }}>
            <iframe
              width="100%"
              height="315"
             
           src="https://www.youtube.com/embed/MgogwcXUIoc?si=9JdDVgLLzYnbGgan"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "10px" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Video;
