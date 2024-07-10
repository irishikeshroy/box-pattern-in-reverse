import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState([]);

  const handleClick = (index) => {
    if (value.length > 7) {
      // Create a copy of the array
      let newValue = [...value];

      // Define a function to remove elements with delay using setTimeout
      const removeElementsWithDelay = () => {
        if (newValue.length > 0) {
          // Remove the last element
          newValue.pop();
          // Update state after a delay
          setValue([...newValue]); // Update state with the new array
        }
      };

      // Start removing elements with a delay
      const intervalId = setInterval(() => {
        removeElementsWithDelay();
        if (newValue.length === 0) {
          clearInterval(intervalId); // Stop the interval when all elements are removed
        }
      }, 50); // Delay of 50ms between each removal
    } else {
      // Add index to the array
      setValue((prev) => [...prev, index]);
    }
  };

  return (
    <div className="App">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          style={{
            width: "100px",
            height: "100px",
            border: "1px solid black",
            margin: "2px",
            backgroundColor: value.includes(index) ? "green" : "",
          }}
        ></div>
      ))}
    </div>
  );
}
