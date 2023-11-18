import { useState } from "react";
import Key from "./key";
import MoonalnderKeys from "./keyboard_moonlander.json";
import MoonalnderKeysL from "./keyboard_moonlander_layers.json";

export default function Keyboard({ keysPressed, keysActive }) {
  const [activeLayerId, setActiveLayerId] = useState(0); // Assuming layer IDs start at 1

  var key_layer_map = {};
  MoonalnderKeysL.forEach(function (l, lindex) {
    console.log(l);
    l.keys.forEach(function (k, kindex) {
      key_layer_map[kindex] = l.id;
    });
  });

  const test = key_layer_map;
  console.log(test);

  return (
    <main>
      <button onClick={() => setActiveLayerId(0)}>Layer 0</button>
      <button onClick={() => setActiveLayerId(1)}>Layer 1</button>
      <div className="pt-10 grid grid-rows-[repeat(5,1fr),2fr] grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)] gap-1">
        {MoonalnderKeysL[activeLayerId].keys.map(function (keyboardKey, index) {
          const isKeyInLayer =
            MoonalnderKeysL[activeLayerId].keys.includes(keysPressed);
          isKeyInLayer && console.log("yes");
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
