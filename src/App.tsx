import { useEffect, useState } from "react";
import axios from "axios";

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}

function App() {
  const [image, setImage] = useState<UnsplashImage | null>(null);

  const fetchRandomImage = async () => {
    const response = await axios.get<UnsplashImage>(
      "https://api.unsplash.com/photos/random",
      {
        headers: {
          Authorization: "Client-ID" + import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
        },
      }
    );
    setImage(response.data);
  };

  useEffect(() => {
    fetchRandomImage();
    const interval = setInterval(fetchRandomImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Random Unsplash Image Every 3 Seconds</h1>
      {image && (
        <div>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            style={{
              maxWidth: "80%",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              marginTop: "20px",
            }}
          />
          <p>{image.alt_description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
