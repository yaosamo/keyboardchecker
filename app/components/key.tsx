import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function Key({ keyboardKey, keysPressed, keysActive }) {
  const [os, setOS] = useState("");

  const isKeyPressed = keysPressed[keyboardKey.code];
  const Span2Cells = keyboardKey.span2;
  const Span3Cells = keyboardKey.span3;
  const Span2Row = keyboardKey.span2row;
  const Space = keyboardKey.space;
  const isKeyActive = keysActive[keyboardKey.code];
  const isKeyNull = keyboardKey.code === null;

  useEffect(() => {
    function getOperatingSystem() {
      const platform = window.navigator.platform;
      const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
      const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];

      if (macosPlatforms.indexOf(platform) !== -1) {
        return "⌘";
      } else if (windowsPlatforms.indexOf(platform) !== -1) {
        return "Win";
      } else {
        return "Meta";
      }
    }
    setOS(getOperatingSystem());
  }, []);

  if (keyboardKey.code === 91) {
    keyboardKey.key = os;
  }

  return (
    <div
      className={`
      ${styles.keyboard_key}
      ${isKeyNull ? styles.nullKey : ""}
      ${isKeyPressed ? styles.keyboard_key_pressed : ""}
      ${isKeyActive ? styles.keyboard_key_active : ""}
      ${keyboardKey.wideL ? styles.wideKeyL : ""}
      ${keyboardKey.wideR ? styles.wideKeyR : ""}
      ${Span2Cells ? styles.span2 : ""}
      ${Span3Cells ? styles.span3 : ""}
      ${Span2Row ? styles.span2row : ""}
      ${Space ? styles.space : ""}
      `}
    >
      {keyboardKey.key}
    </div>
  );
}
