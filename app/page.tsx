"use client"; // This is a client component 👈🏽

import Keyboard from "./components/keyboard";
import { useState, useEffect, useRef } from "react";

function History({ pressed }) {
  return <div>{pressed.code}</div>;
}

export default function Home() {
  return (
    <main className="min-h-screen p-16">
      <div>Keyboard Checker</div>
      <Keyboard />
      <div className="flex flex-row">
        <div>yaosamo.software</div>
      </div>
    </main>
  );
}
