function Key() {
  return <div className="Space">Space</div>;
}

export default function Keyboard({ pressed }) {
  const keyCodes = [
    { key: "+ =", code: 187 },
    { key: "1", code: 49 },
    { key: "2", code: 50 },
    { key: "3", code: 51 },
    { key: "4", code: 52 },
    { key: "5", code: 53 },
    { key: "←", code: 37 },
    { key: " ", code: null },
    { key: "→", code: 39 },
    { key: "6", code: 54 },
    { key: "7", code: 55 },
    { key: "8", code: 56 },
    { key: "9", code: 57 },
    { key: "0", code: 48 },
    { key: "— -", code: 189 },
    { key: "Del", code: 46 },
    { key: "Q", code: 81 },
    { key: "W", code: 87 },
    { key: "E", code: 69 },
    { key: "R", code: 82 },
    { key: "T", code: 84 },
    { key: "LR1", code: "LR" },
    { key: " ", code: null },
    { key: "LR1", code: "LR" },
    { key: "Y", code: 89 },
    { key: "U", code: 85 },
    { key: "I", code: 73 },
    { key: "O", code: 79 },
    { key: "P", code: 80 },
    { key: "| \\", code: 220 },
    { key: "⌫", code: 8 },
    { key: "A", code: 65 },
    { key: "S", code: 83 },
    { key: "D", code: 68 },
    { key: "F", code: 70 },
    { key: "G", code: 71 },
    { key: "Hyper", code: "Hyper" },
    { key: " ", code: null },
    { key: "Meh", code: "Meh" },
    { key: "H", code: 72 },
    { key: "J", code: 74 },
    { key: "K", code: 75 },
    { key: "L", code: 76 },
    { key: ": ;", code: 186 },
    { key: " \" ' ", code: 222 },
    { key: "Shift", code: "ShiftLeft" },
    { key: "Z", code: 90 },
    { key: "X", code: 88 },
    { key: "C", code: 27 },
    { key: "V", code: 86 },
    { key: "B", code: 66 },
    { key: " ", code: null },
    { key: " ", code: null },
    { key: " ", code: null },
    { key: "N", code: 78 },
    { key: "M", code: 77 },
    { key: "< ,", code: 188 },
    { key: "> .", code: 190 },
    { key: "? /", code: 191 },
    { key: "Shift", code: "ShiftRight" },
    { key: "~ `", code: 192 },
    { key: "Caps Word", code: 20 },
    { key: " ", code: "Empty" },
    { key: "←", code: 37 },
    { key: "→", code: 39 },
    { key: " ", code: null },
    { key: " ", code: null },
    { key: " ", code: null },
    { key: " ", code: null },
    { key: " ", code: null },
    { key: "↑", code: 38 },
    { key: "↓", code: 40 },
    { key: "{ [", code: 219 },
    { key: "} ]", code: 221 },
    { key: "LR 1", code: "LR" },
  ];

  return (
    <main className="min-h-screen p-24">
      <div className="grid grid-rows-[repeat(5,1fr),2fr] grid-cols-[repeat(7,1fr),5fr,repeat(7,1fr)] gap-1">
        {keyCodes.map(function (key, index) {
          return (
            <div
              className={key.code === null ? "empty" : ""}
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  pressed.code === key.code || pressed.keyCode === key.code
                    ? "green"
                    : "white",
                minWidth: "4rem",
                minHeight: "4rem",
              }}
            >
              <div style={{ textAlign: "center" }}>{key.key}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
