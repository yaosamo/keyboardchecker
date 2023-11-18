import styles from "./styles.module.css";

export default function Key({ keyboardKey, keysPressed, keysActive }) {
  const isKeyPressed =
    keysPressed[keyboardKey.code] || keysPressed[keyboardKey.key];
  const isKeyActive =
    keysActive[keyboardKey.code] || keysActive[keyboardKey.key];
  const isKeyNull = keyboardKey.code === null;

  return (
    <div
      className={`
      ${styles.keyboard_key}
      ${isKeyNull && styles.nullKey}
      ${isKeyPressed && styles.keyboard_key_pressed}
      ${isKeyActive && styles.keyboard_key_active}`}
    >
      {keyboardKey.key}
    </div>
  );
}
