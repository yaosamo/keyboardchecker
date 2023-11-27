import { useState, useEffect } from "react";
import Key from "./key";
import MoonalnderKeysL from "./keyboard_moonlander_layers.json";
import styles from "./styles.module.css";

export default function Keyboard({ keysPressed, keysActive }) {
  const [currentLayerID, setCurrentLayerID] = useState(0);
  const MoonlanderKeysLayers = MoonalnderKeysL.map((layer) => {
    return {
      ...layer,
      keys: layer.keys.map((key) => ({
        ...key,
        layerId: layer.id,
      })),
      clusterleft: layer.clusterleft.map((key) => ({
        ...key,
        layerId: layer.id,
      })),
      clusterright: layer.clusterright.map((key) => ({
        ...key,
        layerId: layer.id,
      })),
    };
  });

  type KeysObject = {
    layerId: number;
    key: string;
    code: number | null | string;
  };

  const [pressedKeysArray, setPressedKeysArray] = useState<KeysObject[]>([]);

  useEffect(() => {
    setPressedKeysArray([]);

    const findPressedKeyLayerId = () => {
      for (const layer of MoonlanderKeysLayers) {
        const pressedKey = layer.keys.find(
          (key) => keysPressed[key.code || key.key]
        );
        const pressedKeyInClusterR = layer.clusterright.find(
          (key) => keysPressed[key.code || key.key]
        );
        const pressedKeyInClusterL = layer.clusterleft.find(
          (key) => keysPressed[key.code || key.key]
        );

        if (pressedKey) {
          setPressedKeysArray((prevArray) => [...prevArray, pressedKey]);
        }

        if (pressedKeyInClusterR) {
          setPressedKeysArray((prevArray) => [
            ...prevArray,
            pressedKeyInClusterR,
          ]);
        }

        if (pressedKeyInClusterL) {
          setPressedKeysArray((prevArray) => [
            ...prevArray,
            pressedKeyInClusterL,
          ]);
        }
      }
      return null;
    };

    findPressedKeyLayerId();

    const newLayerID = pressedKeysArray.find(
      (key) => key.layerId != currentLayerID
    );

    if (newLayerID && pressedKeysArray.length < 2) {
      setCurrentLayerID(newLayerID.layerId);
    }
  }, [keysPressed]);

  return (
    <main>
      <div className="flex flex-row gap-2">
        <button
          className={`
          ${styles.layer}
          ${currentLayerID === 0 && styles.layerSelected}`}
          onClick={() => setCurrentLayerID(0)}
        ></button>
        <button
          className={`
          ${styles.layer}
          ${currentLayerID === 1 && styles.layerSelected}`}
          onClick={() => setCurrentLayerID(1)}
        ></button>
      </div>
      <div className="pt-4 grid grid-rows-[repeat(5,1fr),2fr] grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)]">
        {MoonlanderKeysLayers[currentLayerID].keys.map(function (
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
        <div className="grid grid-row-start-5 row-span-2 grid-cols-[3fr,1fr,3fr] col-start-7 col-span-3 ">
          <div className="grid grid-cols-[1fr,1fr,1fr]">
            {MoonlanderKeysLayers[currentLayerID].clusterleft.map(function (
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
          <div className="grid grid-cols-[1fr]"></div>
          <div className="grid grid-cols-[1fr,1fr,1fr]">
            {MoonlanderKeysLayers[currentLayerID].clusterright.map(function (
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
