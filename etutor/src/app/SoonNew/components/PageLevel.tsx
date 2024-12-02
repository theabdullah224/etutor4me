import React from "react";
const PageLevel = ({ level, children }: { level: string; children: React.ReactNode }) => {
    return (
      <div className={`transition-all duration-1000 bg-cover bg-center bg-no-repeat h-screen ${level}`}>
        {children}
      </div>
    );
  };
  
  export default PageLevel;
  