import Key from "./key";
import keyboardRegular from "./keyboard_regular.json";

export default function Keyboard({ keysPressed, keysActive }) {
  return (
    <main>
      <div className="pt-2 grid grid-rows-[repeat(6,1fr)] grid-cols-[repeat(20,1fr)]">
        {keyboardRegular.map(function (keyboardKey, index) {
          return (
            <Key
              keyboardKey={keyboardKey}
              keysPressed={keysPressed}
              keysActive={keysActive}
              key={index}
            />
          );
        })}
      </div>
    </main>
  );
}