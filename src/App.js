import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState([]);

  const handleClick = (index) => {
    if (value.length > 7) {
      // Create a copy of the array
      let newValue = [...value];

      // Define a function to remove elements with delay
      const removeElementsWithDelay = () => {
        if (newValue.length > 0) {
          // Remove the last element
          newValue.pop();
          // Update state after a delay
          setTimeout(() => {
            setValue([...newValue]); // Update state with the new array
            removeElementsWithDelay(); // Recursively call to remove next element
          }, 50); // Delay of 1000ms (1 second)
        }
      };

      // Start removing elements with delay
      removeElementsWithDelay();
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
