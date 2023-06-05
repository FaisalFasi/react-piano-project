import { useEffect, useState } from "react";
import * as Tone from "tone";

import PianoKey from "./PianoKey";
const Piano = () => {
  // const notes = [
  //   "C4",
  //   "D4",
  //   "E4",
  //   "F4",
  //   "G4",
  //   "A4",
  //   "B4",
  //   "C5",
  //   "E5",
  //   "F5",
  //   "G5",
  //   "A5",
  //   "B5",
  //   "C6",
  // ];
  const keyboardEventKeysToNotes = {
    0: "A#3",
    1: "C#3",
    2: "D3",
    3: "D#3",
    4: "E3",
    5: "F3",
    6: "F#3",
    7: "G3",
    8: "G#3",
    9: "A3",
    q: "B3",
    w: "C4",
    e: "C#4",
    r: "D4",
    t: "D#4",
    y: "E4",
    u: "F4",
    i: "F#4",
    o: "G4",
    p: "G#4",
    a: "A4",
    s: "A#4",
    d: "B4",
    f: "C5",
    g: "C#5",
    h: "D5",
    j: "D#5",
    k: "E5",
    l: "F5",
    ";": "F#5",
    "'": "G5",
    z: "G#5",
    x: "A5",
    c: "A#5",
    v: "B5",
    b: "C6",
    n: "C#6",
    m: "D6",
    ",": "D#6",
    ".": "E6",
    "/": "F6",
  };
  const keyboardInput = () => {
    document.addEventListener(
      "keydown",
      (event) => {
        var name = event.key;
        console.log(name);

        const synth = new Tone.Synth().toDestination();

        synth.triggerAttackRelease(keyboardEventKeysToNotes[name], "8n");

        // alert(`Key pressed ${name} \r\n Key code value: $aa{code}`);
      },
      false
    );
  };
  keyboardInput();

  return (
    <div className=" ">
      <h1 className="text-center text-red-500 font-bold text-4xl mt-5">
        ---- Enjoy Piano ---
      </h1>

      <div className="grid grid-cols-9">
        {Object.entries(keyboardEventKeysToNotes).map(([key, note]) => {
          return (
            <PianoKey
              key={note}
              noteKey={key}
              keyboardInput={keyboardInput}
              note={note}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Piano;
