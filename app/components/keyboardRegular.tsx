import Key from "./key";
import keyboardRegular from "./keyboard_regular.json";

export default function Keyboard({ keysPressed, keysActive }) {
  return (
    <div className="grid grid-cols-[repeat(24,2fr)]">
      {keyboardRegular.map(function (key, index) {
        return (
          <Key
            keyboardKey={key}
            keysPressed={keysPressed}
            keysActive={keysActive}
            key={index}
          />
        );
      })}
    </div>
  );
}
