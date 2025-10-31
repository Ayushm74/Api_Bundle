// src/NewMain.tsx
import React from "react";
import App from "./App";

const NewMain: React.FC = () => {
  const [showApp, setShowApp] = React.useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!showApp ? (
        <>
          <h1>Welcome to the New Main Page</h1>
          <p>This is your new entry point for the app.</p>
          <button onClick={() => setShowApp(true)}>Go to Old Main Page</button>
        </>
      ) : (
        <App />
      )}
    </div>
  );
};

export default NewMain;
