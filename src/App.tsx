import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UnsplashPage from "./pages/UnsplashPage";
import Api2Page from "./pages/Api2Page";
import Api3Page from "./pages/Api3Page";
import Api4Page from "./pages/Api4Page";
import Api5Page from "./pages/Api5Page";


const Home: React.FC = () => {
  const apis = [
    { name: "Unsplash API", path: "/api1" },
    { name: "API 2", path: "/api2" },
    { name: "API 3", path: "/api3" },
    { name: "API 4", path: "/api4" },
    { name: "API 5", path: "/api5" },
    { name: "API 6", path: "/api6" },
    { name: "API 7", path: "/api7" },
    { name: "API 8", path: "/api8" },
    { name: "API 9", path: "/api9" },
    { name: "API 10", path: "/api10" },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🌐 API Showcase Website</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "15px",
          padding: "20px",
          maxWidth: "800px",
          margin: "auto",
        }}
      >
        {apis.map((api, index) => (
          <Link
            key={index}
            to={api.path}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "12px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {api.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api1" element={<UnsplashPage />} />
        <Route path="/api2" element={<Api2Page />} />
        <Route path="/api3" element={<Api3Page />} />
        <Route path="/api4" element={<Api4Page />} />
        <Route path="/api5" element={<Api5Page />} />
      </Routes>
    </Router>
  );
};

export default App;
