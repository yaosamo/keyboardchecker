"use client"; // This is a client component 👈🏽

import Keyboard from "./components/keys";
import { useState, useEffect, useRef } from "react";

function History({ pressed }) {
  return <div>{pressed.code}</div>;
}

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
  return (
    <main>
      <div>The Moonalnder Keyboard Checker</div>
      <Keyboard pressed={pressedKey} />
      <History pressed={pressedKey} />
      <div>Made by Yaosamo</div>
    </main>
  );
}
