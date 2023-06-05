import * as Tone from "tone";

const PianoKey = (props) => {
  const note = props.note;
  const synth = new Tone.Synth().toDestination();

  const playSound = () => {
    synth.triggerAttackRelease(note, "8n");
  };

  return (
    <button
      className="p-4 m-2 h-40 bg-white text-black shadow-lg"
      onClick={() => playSound()}
    >
      {note}
    </button>
  );
};

export default PianoKey;
