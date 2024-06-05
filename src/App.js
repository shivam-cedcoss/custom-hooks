import React from "react";
import { useMediaQuery } from "./custom-hooks/useMediaQuery";

const App = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log(isMobile)
  return (
    <div>
      <h1>{isMobile ? "Mobile View" : "Desktop View"}</h1>
    </div>
  );
};

export default App;
