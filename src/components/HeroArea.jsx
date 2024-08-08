import React, { useState } from "react";
import img1 from "../assets/pngwing.com.png";

const HeroArea = ({setEurl}) => {
  const [url, setUrl] = useState(''); // Initialize state with an empty string
  const [shortenedUrl, setShortenedUrl] = useState(''); // State to store the shortened URL
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  const handleChange = (e) => {
    setUrl(e.target.value); // Update the state with the new input value
  };

  const handleShorten = async () => {
    if (!url) {
      alert("Please enter a URL to shorten.");
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      const response = await fetch(
        "https://url-shortner-backend-omega.vercel.app/api/v1/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }), // Send the URL in the request body
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setShortenedUrl(result.shortenedUrl); // Set the shortened URL from the response
      setEurl(result.shortenedUrl)
      setError(null); // Clear any previous errors
      // window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error shortening URL:", error);
      setError("Failed to shorten the URL. Please try again.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="container-fluid w-full flex flex-col md:flex-row items-start justify-center bg-steal px-4 py-2">
      <div className="flex flex-col md:flex-row justify-center md:items-center rounded-sm md:py-10 w-full max-w-screen-xl">
        <img
          src={img1}
          alt="Description"
          className="h-32 md:h-64 mb-4 md:mb-0 md:mr-4 object-contain"
        />
        <div className="flex flex-col justify-center items-center sm:items-start w-full md:w-auto px-4 md:px-0">
          <h2 className="text-secondary text-xl md:text-4xl font-bold mb-4">
            Enter the URL to Shorten!
          </h2>
          <div className="flex flex-col md:flex-row items-center w-full md:w-[40rem]">
            <input
              type="text"
              value={url} // Connect the value of the input to the state
              onChange={handleChange} // Update state on input change
              className="rounded-2xl sm:rounded-none md:rounded-l-xl placeholder:text-white bg-green-900 opacity-80 shadow-2xl border text-white text-md border-green-900 w-full md:w-[25rem] py-4 px-4 mb-2 md:mb-0"
              placeholder="Paste a link to shorten it"
            />
            <button
              onClick={handleShorten} // Handle click event to shorten the URL
              className="bg-sorange sm:rounded-none rounded-2xl md:rounded-r-xl text-white px-6 py-4 text-lg font-semibold hover:bg-orange-600 transition-colors"
              disabled={loading} // Disable button while loading
            >
              {loading ? "SHORTENING..." : "SHORTEN"}
            </button>
          </div>
          {shortenedUrl && (
            <div className="mt-4 text-white">
              <p>Shortened URL:</p>
              <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-sorange hover:underline">
                {shortenedUrl}
              </a>
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-500">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
