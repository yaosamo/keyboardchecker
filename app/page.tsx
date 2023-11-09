"use client"; // This is a client component 👈🏽

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  // Function to call when a key is pressed
  const [pressedKey, setPressedKey] = useState("");
  const handleKeyDown = (event) => {
    setPressedKey(event.key); // Set the pressed key to the state
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-mono text-sm">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Pressed key: {pressedKey}
        </div>
      </div>
    </main>
  );
}
