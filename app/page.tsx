"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import Keyboard from "./components/keyboard";
import styles from "./components/styles.module.css";

export default function Home() {
  const [keysPressed, setKeysPressed] = useState({});
  const [keysActive, setKeysActive] = useState({});
  const [pressedKey, setPressedKey] = useState({});

  const handleKeyDown = (event) => {
    setPressedKey(event);
    setKeysPressed((prevKeys) => ({
      ...prevKeys,
      [event.code]: true,
      [event.keyCode]: true,
    }));
    console.log("Pressed", event);

    if (
      event.code === "Space" ||
      event.code === "Tab" ||
      event.code === "Meta"
    ) {
      event.preventDefault(); // Prevent the default action
    }

    setKeysActive((prevKeys) => ({
      ...prevKeys,
      [event.keyCode]: true,
      [event.code]: true,
    }));
  };

  const handleKeyUp = (event) => {
    setKeysPressed((prevKeys) => ({
      ...prevKeys,
      [event.keyCode]: false,
      [event.code]: false,
    }));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <main className="min-h-screen border flex flex-col justify-between pl-24 pr-24 pt-16 pb-16">
      <div className={styles.heading}>Keyboard Checker</div>
      <Keyboard
        keysActive={keysActive}
        keysPressed={keysPressed}
        pressedKey={pressedKey}
      />
      <div className="flex flex-row justify-between">
        <div className={styles.heading}>History</div>
        <div className={styles.heading}>creative-club.space</div>
      </div>
    </main>
  );
}
