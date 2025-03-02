import { useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); // Hide the loading screen
  };

  return (
    <div className="min-h-screen bg-black">
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      {!isLoading && <Home />}
    </div>
  );
}

export default App;