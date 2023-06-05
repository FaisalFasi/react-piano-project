import PianoKey from "./PianoKey";
const Piano = () => {
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

  return (
    <div className="flex flex-wrap">
      {notes.map((note) => {
        return <PianoKey key={note} note={note} />;
      })}
    </div>
  );
};

export default Piano;
