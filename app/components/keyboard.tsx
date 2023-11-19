import { useState, useEffect } from "react";
import Key from "./key";
import MoonalnderKeys from "./keyboard_moonlander.json";
import MoonalnderKeysL from "./keyboard_moonlander_layers.json";
import styles from "./styles.module.css";

export default function Keyboard({ keysPressed, keysActive, pressedKey }) {
  const [activeLayerId, setActiveLayerId] = useState(0);

  const MoonlanderKeysLayers = MoonalnderKeysL.map((layer) => {
    return {
      ...layer,
      keys: layer.keys.map((key) => ({
        ...key,
        layerId: layer.id,
      })),
    };
  });

  useEffect(() => {
    const findPressedKeyLayerId = () => {
      for (const layer of MoonlanderKeysLayers) {
        const pressedKey = layer.keys.find(
          (key) => keysPressed[key.code || key.key]
        );

        if (pressedKey) {
          return pressedKey.layerId;
        }
      }
      return null;
    };

    const pressedKeyLayerId = findPressedKeyLayerId();

    if (pressedKeyLayerId !== null && pressedKeyLayerId !== activeLayerId) {
      setActiveLayerId(pressedKeyLayerId);
    }
  });

  return (
    <main>
      <button onClick={() => setActiveLayerId(0)}>Layer 0</button>
      <button onClick={() => setActiveLayerId(1)}>Layer 1</button>
      <div className="pt-10 grid grid-rows-[repeat(5,1fr),2fr] grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)] gap-1">
        {MoonlanderKeysLayers[activeLayerId].keys.map(function (
          keyboardKey,
          index
        ) {
          return (
            <Key
              keyboardKey={keyboardKey}
              keysPressed={keysPressed}
              keysActive={keysActive}
              key={index}
            />
          );
        })}
        <div className={styles.clusters}>
          <div className={styles.clusterleft}>
            {MoonlanderKeysLayers[activeLayerId].clusterleft.map(function (
              keyboardKey,
              index
            ) {
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
          <div className={styles.clusterright}>
            {MoonlanderKeysLayers[activeLayerId].clusterright.map(function (
              keyboardKey,
              index
            ) {
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
        </div>
      </div>
    </main>
  );
}
