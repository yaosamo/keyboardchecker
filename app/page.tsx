"use client"; // This is a client component 👈🏽

import Keyboard from "./components/keys";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  // Function to call when a key is pressed
  const [pressedKey, setPressedKey] = useState("");
  const handleKeyDown = (event) => {
    setPressedKey(event); // Set the pressed key to the state
  };
  useEffect(() => {
    // Attach the event listener to the window object
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return <Keyboard pressed={pressedKey} />;
}
