import styles from "./styles.module.css";
import Key from "./key";

export default function KeyLayers({ layer, keysPressed, keysActive }) {
  return (
    <div>
      <div className="pt-10 grid grid-rows-[repeat(5,1fr),2fr] grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)] gap-1">
        {layer.keys.map((key, keyIndex) => (
          <Key
            key={keyIndex}
            keyboardKey={key}
            keysPressed={keysPressed}
            keysActive={keysActive}
          />
        ))}
      </div>
    </div>
  );
}
