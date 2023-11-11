function Key() {
  return <div className="Space">Space</div>;
}

export default function Keyboard({ pressed }) {
  const keyCodes = [
    { key: "Backspace", code: 8 },
    { key: "Tab", code: 9 },
    { key: "Enter", code: 13 },
    { key: "Shift", code: 16 },
    { key: "Ctrl", code: 17 },
    { key: "Alt", code: 18 },
    { key: "Pause/Break", code: 19 },
    { key: "Caps Lock", code: 20 },
    { key: "Escape", code: 27 },
    { key: "Space", code: 32 },
    { key: "Page Up", code: 33 },
    { key: "Page Down", code: 34 },
    { key: "End", code: 35 },
    { key: "Home", code: 36 },
    { key: "Left Arrow", code: 37 },
    { key: "Up Arrow", code: 38 },
    { key: "Right Arrow", code: 39 },
    { key: "Down Arrow", code: 40 },
    { key: "Insert", code: 45 },
    { key: "Delete", code: 46 },
    // Number keys 0-9
    { key: "0", code: 48 },
    { key: "1", code: 49 },
    { key: "2", code: 50 },
    // ... add the rest of the number keys
    { key: "9", code: 57 },
    // Letter keys A-Z
    { key: "A", code: 65 },
    // ... add the rest of the letter keys
    { key: "Z", code: 90 },
    // Numpad keys
    { key: "Numpad 0", code: 96 },
    // ... add the rest of the numpad keys
    { key: "Numpad 9", code: 105 },
    { key: "Multiply", code: 106 },
    { key: "Add", code: 107 },
    { key: "Subtract", code: 109 },
    { key: "Decimal Point", code: 110 },
    { key: "Divide", code: 111 },
    // Function keys F1-F12
    { key: "F1", code: 112 },
    // ... add the rest of the function keys
    { key: "F12", code: 123 },
    { key: "Num Lock", code: 144 },
    { key: "Scroll Lock", code: 145 },
    // Semi-colons / Colon, Equals / Plus, Comma, Dash / Underscore, Period / Greater than, Forward Slash / Question Mark
    { key: "Semicolon", code: 186 },
    { key: "Equals", code: 187 },
    { key: "Comma", code: 188 },
    { key: "Dash", code: 189 },
    { key: "Period", code: 190 },
    { key: "Forward Slash", code: 191 },
    // Grave Accent / Tilde, Open Bracket, Back Slash, Close Bracket, Single Quote
    { key: "Grave Accent", code: 192 },
    { key: "Open Bracket", code: 219 },
    { key: "Back Slash", code: 220 },
    { key: "Close Bracket", code: 221 },
    { key: "Single Quote", code: 222 },
    // Additional keys
    { key: "Left Window Key", code: 91 },
    { key: "Right Window Key", code: 92 },
    { key: "Select Key", code: 93 },
    // Some browsers map keys differently; these additional codes may be needed
    { key: "Context Menu", code: 93 },
    { key: "Power", code: 95 },
    { key: "Sleep", code: 95 },
  ];

  // find class and if class Keyboard_{pressed} found ? Default : Highlight

  return (
    <main className="flex min-h-screen flex-wrap items-center justify-between p-24">
      {keyCodes.map((key) => (
        <button
          className="fixed left-0 top-0 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          key={key.key}
          style={{
            backgroundColor: pressed.key === key.key ? "green" : "white",
            margin: "5px",
            padding: "10px",
          }}
        >
          {key.key}
        </button>
      ))}
    </main>
  );
}
