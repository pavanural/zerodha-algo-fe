import React, { useEffect } from 'react';

const AutoRefreshPage = () => {
  useEffect(() => {
    // Set an interval to reload the page every 5 minutes (300,000 milliseconds)
    const intervalId = setInterval(() => {
      window.location.reload(true); // Passing 'true' forces a full page reload
    }, 180000); 

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>This page will refresh automatically every 5 minutes</h1>
      <p>Ensure you save any work before the refresh occurs.</p>
    </div>
  );
};

export default AutoRefreshPage;
