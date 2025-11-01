import React, { useState } from "react";
import UnsplashPage from "./UnsplashPage";

const App: React.FC = () => {
  const [showUnsplash, setShowUnsplash] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!showUnsplash ? (

        <>
          <h1> Welcome to My React App</h1>
          <p>Click below to explore images from Unsplash!</p>
          <button
            onClick={() => setShowUnsplash(true)}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Open Unsplash Gallery
          </button>
        </>
      ) : (
        <UnsplashPage />
      )}
    </div>
  );
};

export default App;
