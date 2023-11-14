function Key() {
  return <div className="Space">Space</div>;
}

export default function Keyboard({ pressed }) {
  const keyCodes = [
    { key: "+ =", code: "187" },
    { key: "1", code: "Digit1" },
    { key: "2", code: "Digit2" },
    { key: "3", code: "Digit3" },
    { key: "4", code: "Digit4" },
    { key: "5", code: "Digit5" },
    { key: "←", code: "Digit6" },
    { key: " ", code: "na" },
    { key: "→", code: "Digit7" },
    { key: "6", code: "Digit9" },
    { key: "7", code: "Digit0" },
    { key: "8", code: "Delete" },
    { key: "9", code: "KeyQ" },
    { key: "0", code: "KeyW" },
    { key: "— -", code: "KeyE" },
    { key: "Del", code: "KeyR" },
    { key: "Q", code: "KeyT" },
    { key: "W", code: "KeyY" },
    { key: "E", code: "KeyU" },
    { key: "R", code: "KeyI" },
    { key: "T", code: "KeyO" },
    { key: "LR1", code: "KeyP" },
    { key: " ", code: "na" },
    { key: "LR1", code: "KeyP" },
    { key: "Y", code: "KeyA" },
    { key: "U", code: "KeyS" },
    { key: "I", code: "KeyD" },
    { key: "O", code: "KeyF" },
    { key: "P", code: "KeyG" },
    { key: "| \\", code: "KeyH" },
    { key: "⌫", code: "KeyJ" },
    { key: "A", code: "KeyK" },
    { key: "S", code: "KeyL" },
    { key: "D", code: "KeyZ" },
    { key: "F", code: "KeyX" },
    { key: "G", code: "KeyC" },
    { key: "Hyper", code: "KeyV" },
    { key: " ", code: "na" },
    { key: "Meh", code: "KeyB" },
    { key: "H", code: "KeyN" },
    { key: "J", code: "KeyM" },
    { key: "K", code: "ShiftLeft" },
    { key: "L", code: "CapsLock" },
    { key: ": ;", code: "Alt" },
    { key: " \" ' ", code: "Meta" },
    { key: "Shift", code: "LeftShift" },
    { key: "Z", code: "keyCode" },
    { key: "X", code: "keyCode" },
    { key: "C", code: "Escape" },
    { key: "V", code: "Space" },
    { key: "B", code: "Enter" },
    { key: " ", code: "na" },
    { key: " ", code: "na" },
    { key: " ", code: "na" },
    { key: "N", code: "Tab" },
    { key: "M", code: "Minus" },
    { key: "< ,", code: "BracketLeft" },
    { key: "> .", code: "BracketRight" },
    { key: "? /", code: "Semicolon" },
    { key: "Shift", code: "RightShift" },
    { key: "~ `", code: "Comma" },
    { key: "Caps Word", code: "Period" },
    { key: " ", code: "empty" },
    { key: "←", code: "ArrowLeft" },
    { key: "→", code: "ArrowRight" },
    { key: " ", code: "na" },
    { key: " ", code: "na" },
    { key: " ", code: "na" },
    { key: " ", code: "na" },
    { key: " ", code: "na" },
    { key: "↑", code: "ArrowUp" },
    { key: "↓", code: "ArrowDown" },
    { key: "{ [", code: "ArrowDown" },
    { key: "} ]", code: "ArrowDown" },
    { key: "LR 1", code: "na" },
  ];
  // keyCode for codes

  return (
    <main className="min-h-screen p-24">
      <div className="grid grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)] grid-rows-[repeat(5,1fr),2fr]">
        {keyCodes.map(function (key, index) {
          return (
            <div
              key={key.key}
              style={{
                backgroundColor: pressed.code === key.code ? "green" : "white",
                margin: "5px",
                padding: "10px",
              }}
            >
              {key.key}
            </div>
          );
        })}
      </div>
    </main>
  );
}
