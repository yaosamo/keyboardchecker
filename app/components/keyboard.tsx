import Key from "./key";
import MoonalnderKeys from "./keyboard_moonlander.json";
import MoonLayers from "./keyboard_moonlander_layers.json";

export default function Keyboard({ keysPressed, keysActive }) {
  return (
    <div className="pt-10 grid grid-rows-[repeat(5,1fr),2fr] grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)] gap-1">
      {MoonalnderKeys.map(function (keyboardKey, index) {
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
  );
}
