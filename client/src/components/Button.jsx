import React, { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

function Button({ isHidden }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <button
      className={`${isLoading ? "bg-green-gator text-white" : ""} 
      } select-none border-1 border-green-gator text-green-gator px-3 py-0 md:px-3 rounded-full 
      gap-2 items-center justify-center hover:bg-green-gator hover:text-white cursor-pointer transition-all`}
      onClick={handleClick}
    >
      {isLoading ? (
        <div className="flex justify-between w-24 items-center">
          <AiOutlineLoading className="animate-spin text-sm" />
          <p className="text-sm md:text-lg">Loading</p>
        </div>
      ) : (
        <p className="text-sm md:text-lg select-none">Connect</p>
      )}
    </button>
  );
}

export default Button;
