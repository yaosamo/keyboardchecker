"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import Keyboard from "./components/keyboard";
import styles from "./components/styles.module.css";

export default function Home() {
  const [keysPressed, setKeysPressed] = useState({});
  const [keysActive, setKeysActive] = useState({});
  const [history, setHistory] = useState<string[]>([]);

  const handleKeyDown = (event) => {
    setHistory((prevHistory) => [
      event.key,
      ...prevHistory.slice(0, 9), // Keep only the last 9 plus the new key
    ]);

    setKeysPressed((prevKeys) => ({
      ...prevKeys,
      [event.code]: true,
      [event.keyCode]: true,
    }));

    if (
      event.code === "Space" ||
      event.code === "Tab" ||
      event.code === "Meta" ||
      event.code === "ArrowUp" ||
      event.code === "ArrowDown"
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
  }, [keysPressed]);
  return (
    <main className="min-h-screen flex flex-col justify-between pl-24 pr-24 pt-16 pb-16">
      <div className={styles.heading}>Keyboard Checker</div>
      <Keyboard keysActive={keysActive} keysPressed={keysPressed} />
      <div className="flex flex-row justify-between">
        <div className={styles.heading}>
          {" "}
          <div className="flex flex-row gap-2">
            {history.map((key, index) => (
              <p className="flex" key={index}>
                {key}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.heading}>
          Made at the <a>Creative Club</a>
        </div>
      </div>
    </main>
  );
}
