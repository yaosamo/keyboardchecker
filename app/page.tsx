"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import SplitKeyboard from "./components/keyboardSplit";
import RegularKeyboard from "./components/keyboardRegular";
import styles from "./components/styles.module.css";

export default function Home() {
  const [keysPressed, setKeysPressed] = useState({});
  const [keysActive, setKeysActive] = useState({});
  const [history, setHistory] = useState<string[]>([]);
  const [isKeyboardSplit, setIsKeyboardSplit] = useState(true); //

  const handleKeyDown = (event) => {
    setHistory((prevHistory) => [
      event.key,
      ...prevHistory.slice(0, 12), // Keep only the last 9 plus the new key
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
      event.code === "ArrowDown" ||
      event.code === "META"
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
      <div className="flex flex-col gap-4">
        <div className={styles.heading}>Keyboard Checker</div>
        <div className="flex flex-row justify-center gap-2">
          <button
            className={styles.radiobutton}
            onClick={() => setIsKeyboardSplit(true)}
          >
            Split
          </button>
          <button
            className={styles.radiobutton}
            onClick={() => setIsKeyboardSplit(false)}
          >
            Regular
          </button>
        </div>
      </div>
      {isKeyboardSplit ? (
        <SplitKeyboard keysActive={keysActive} keysPressed={keysPressed} />
      ) : (
        <RegularKeyboard keysActive={keysActive} keysPressed={keysPressed} />
      )}
      <div className="flex flex-row justify-center">
        <div className={styles.heading}>
          <div className="flex flex-row-reverse gap-2">
            {[...history].map((key, index) => {
              let opacity = 1;
              if (index >= 5 && index <= 12) {
                opacity = 1 - (index - 5) / 8;
              }
              return (
                <p key={index} style={{ opacity: opacity }}>
                  {key}
                </p>
              );
            })}
          </div>
        </div>
        {/* <div className={styles.creativeclub}>
          Made at the <a>Creative Club</a>
        </div> */}
      </div>
    </main>
  );
}
