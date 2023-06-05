import { useEffect, useState } from "react";
import * as Tone from "tone";

import PianoKey from "./PianoKey";
const Piano = () => {
  // const [xPos, setXPos] = useState(0);
  // const [yPos, setYPos] = useState(0);

  const notes = [
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5",
    "E5",
    "F5",
    "G5",
    "A5",
    "B5",
    "C6",
  ];
  const keyboardEventKeysToNotes = {
    a: "C4",
    s: "D4",
    d: "E4",
    f: "F4",
    g: "G4",
    h: "A4",
    j: "B4",
    k: "C5",
    l: "E5",
    m: "F5",
    n: "G5",
    b: "A5",
    v: "B5",
    c: "C6",
  };
  const keyboardInput = () => {
    document.addEventListener(
      "keydown",
      (event) => {
        var name = event.key;

        const synth = new Tone.Synth().toDestination();

        // keyboardEventKeysToNotes[name];
        synth.triggerAttackRelease(keyboardEventKeysToNotes[name], "8n");

        console.log(name);

        // alert(`Key pressed ${name} \r\n Key code value: ${code}`);
      },
      false
    );
  };
  keyboardInput();
  // console.log(keyListner());
  return (
    <div className="flex flex-wrap">
      {notes.map((note) => {
        return (
          <PianoKey key={note} keyboardInput={keyboardInput} note={note} />
        );
      })}
    </div>
  );
};

export default Piano;
