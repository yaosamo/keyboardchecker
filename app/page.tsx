"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import Keyboard from "./components/keyboard";
import styles from "./components/styles.module.css";

export default function Home() {
  const [keysPressed, setKeysPressed] = useState({});
  const [keysActive, setKeysActive] = useState({});

  const handleKeyDown = (event) => {
    setKeysPressed((prevKeys) => ({ ...prevKeys, [event.keyCode]: true }));
    setKeysActive((prevKeys) => ({ ...prevKeys, [event.keyCode]: true }));
  };

  const handleKeyUp = (event) => {
    setKeysPressed((prevKeys) => ({ ...prevKeys, [event.keyCode]: false }));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [keysPressed]);

  return (
    <main className="min-h-screen border flex flex-col justify-between pl-28 pr-28 pt-16 pb-16">
      <div className={styles.heading}>Keyboard Checker</div>

      <Keyboard keysActive={keysActive} keysPressed={keysPressed} />
      <div className="flex flex-row justify-between">
        <div className={styles.heading}>History</div>
        <div className={styles.heading}>creative-club.space</div>
      </div>
    </main>
  );
}
