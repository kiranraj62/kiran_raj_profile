import React, { useState, useEffect } from "react";
import KiranRajPage from "./components/KiranRajPage";
import LoadingScreen from "./components/LoadingScreen";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      {!isLoading && <KiranRajPage />}
    </>
  );
}