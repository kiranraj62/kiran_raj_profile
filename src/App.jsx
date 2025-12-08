import React, { useState, useEffect } from "react";
import KiranRajPage from "./components/KiranRajPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Immediately set loading false, removing artificial delay
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <KiranRajPage />
      )}
    </>
  );
}