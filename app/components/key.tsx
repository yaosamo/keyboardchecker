import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";

export default function Key({ keyboardKey, pressedKey }) {
  return (
    <div
      className={
        keyboardKey.code === pressedKey.keyCode
          ? styles.keyboard_key_pressed
          : styles.keyboard_key
      }
      // onKeyUp={}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   backgroundColor:
      //     pressed.code === key.code || pressed.keyCode === key.code
      //       ? "#575757"
      //       : "white",
      //   minWidth: "4rem",
      //   minHeight: "4rem",
      //   border: "1px solid",
      //   borderRadius: "6px",
      // }}
    >
      {keyboardKey.key}
    </div>
  );
}
