import React, { useState } from "react";

const useCount = () => {
  const [count, setCount] = useState(1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const increment = () => {
    setCount(count + 1);
  };
  return {
    count,
    setCount,
    decrement,
    increment,
  };
};

export default useCount;
