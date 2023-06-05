const Navbar = () => {
  return (
    <nav className="flex flex-col items-center p-10 gap-4 bg-green-500 text-white">
      <h1 className="font-bold">React Piano</h1>
      <div>
        <p>
          This is a simple piano app built with React. It should play sounds
          when we click on the keys. But we need to fix some things first.
        </p>
        <ol className="font-thin">
          <li className="list-decimal">
            it should play a sound when we click on the key 🤔, let's check the{" "}
            <code>onClick</code> code in the <code>PianoKey.jsx</code> component
          </li>
          <li className="list-decimal">
            {" "}
            our piano needs more than one key 🤔, let's use <code>
              .map
            </code>{" "}
            somehow in <code>Piano.jsx</code>
          </li>
          <li className="list-decimal">
            We should add more notes to the keyboard! google "piano notes" and
            add more notes to the <code>notes</code> array in{" "}
            <code>Piano.jsx</code>
          </li>
          <li className="list-decimal">
            <span className="font-400">EXTRA</span>: it should play a sound when
            we press a key on the keyboard
          </li>
          <li className="list-decimal">
            EXTRA: make a new component called <code>Drums.jsx</code>, find some
            free drum sounds on the internet and make the drum sounds play when
            you click them
          </li>
          <li className="list-decimal">
            EXTRA: 🔴 let the user record a melody and play it back 🤯
          </li>
          <li className="list-decimal">
            EXTRA: International! add musical scales from different cultures
            like hijaz, iwato, etc. add buttons to change the selected scale
          </li>
          <li className="list-decimal">
            EXTRA: Soundboard! make a silly soundboard with clapping, laughing
            sound effects.
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
