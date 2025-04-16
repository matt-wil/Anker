import { useEffect, useState } from "react";

const Gallery = () => {
  const [photoArray, setPhotoArray] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://localhost:5001/api/portfolio-images"); // Replace "DATABASE" with your actual API endpoint

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPhotoArray(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error("Error fetching photos:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos(); // Call the async fetch function
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  if (loading) {
    return <div>Loading photos...</div>;
  }

  if (error) {
    return <div>Error loading photos: {error.message}</div>;
  }

  return (
    <div>
      {photoArray.map((photo, index) => (
        <div key={index} className="flex flex-row gap-2 justify-center items-center">
          <img src={photo.url || photo} alt={`${photo.name || 'photo' } portfolio gallery`} />
          {/* Assuming your photo object has a 'url' property for the image source */}
          {/* If 'photo' itself is the URL, the fallback works */}
          {/* Consider adding a 'name' or 'altText' property to your data */}
        </div>
      ))}
    </div>
  );
};

export default Gallery;