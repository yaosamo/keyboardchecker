"use client"; // This is a client component 👈🏽
import { useState, useEffect, useRef } from "react";
import SplitKeyboard from "./components/keyboardSplit";
import RegularKeyboard from "./components/keyboardRegular";
import styles from "./components/styles.module.css";

export default function Home() {
  const creativeClub = "With ♥︎ from Creative Club";

  const [keysPressed, setKeysPressed] = useState({});
  const [keysActive, setKeysActive] = useState({});
  const [history, setHistory] = useState<string[]>([creativeClub]);
  const [isKeyboardSplit, setIsKeyboardSplit] = useState(true);

  const keyboardChange = () => {
    setIsKeyboardSplit((prevState) => !prevState);
    setKeysActive({});
    setHistory([creativeClub]);
  };

  const handleKeyDown = (event) => {
    setHistory((prevHistory) => [event.key, ...prevHistory.slice(0, 12)]);

    setKeysPressed((prevKeys) => ({
      ...prevKeys,
      [event.code]: true,
      [event.keyCode]: true,
    }));
    event.preventDefault();
    if (event.ctrlKey || event.altKey || event.metaKey) {
      const blockedKeys = ["a", "c", "v", "x", "s", "p", "f", "r", "d"];

      if (blockedKeys.includes(event.key.toLowerCase())) {
        console.log(
          `Blocked ${
            event.ctrlKey ? "Ctrl" : event.metaKey ? "Cmd" : "Alt"
          } + ${event.key.toUpperCase()}`
        );
        event.preventDefault();
      }
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
    <main className="min-h-screen flex flex-col justify-between pl-32 pr-32 pt-16 pb-16">
      <div className="flex flex-col gap-4">
        <div className={styles.heading}>Keyboard Checker</div>
        <div className="flex flex-row justify-center gap-2">
          <button
            className={`${styles.radiobutton} ${styles.heading} ${
              isKeyboardSplit ? styles.radiobuttonActive : ""
            }`}
            onClick={() => !isKeyboardSplit && keyboardChange()}
          >
            Moonlander
          </button>
          <button
            className={`${styles.radiobutton} ${styles.heading} ${
              !isKeyboardSplit ? styles.radiobuttonActive : ""
            }`}
            onClick={() => isKeyboardSplit && keyboardChange()}
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
      <div className="flex h-3 flex-row justify-center">
        <div className={styles.heading}>
          <div className="flex flex-row-reverse gap-2">
            {[...history].map((key, index) => {
              let opacity = 1;
              if (index >= 5 && index <= 12) {
                opacity = 1 - (index - 5) / 8;
              }
              return (
                <p key={index} style={{ opacity: opacity }}>
                  <a target="_blank" href="https://www.patreon.com/yaosamo">
                    {key}
                  </a>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
