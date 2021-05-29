import React from "react";
// import { tw } from "twind";
// import logo from "static/logo.svg";
import GlobalStyles from "components/GlobalStyles";
import "./App.css";
import { atom, useAtom } from "jotai";
import { countAtom } from "atoms/counter";

const moreFiveAtom = atom((get) => get(countAtom) + 5);

function App() {
  const [count, setCount] = useAtom(countAtom);
  const [moreFive] = useAtom(moreFiveAtom);
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <h1 data-testid="count-value">{count}</h1>
        <h1>{moreFive}</h1>
        <button
          data-testid="btn-increase"
          onClick={() => setCount((prev) => prev + 1)}
        >
          increase
        </button>
        <button onClick={() => setCount((prev) => prev - 1)}>decrease</button>
      </div>
    </>
  );
}

export default App;
