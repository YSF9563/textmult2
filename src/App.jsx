import React, { useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
function App() {
  const [text, setText] = useState('');
  const [val, setVal] = useState('');
  const [button, setButton] = useState('Copy 👍');

  // Simple sleep function that returns a promise
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));

  const clip = async () => {
    const repeatCount = Number(val) || 0;
    let copyText = Array(repeatCount).fill(text).join(" ");
    await navigator.clipboard.writeText(copyText);  // Clipboard write operation
    setButton("Copied 😁");
    await sleep(1500);  // Wait for 2 seconds
    setButton("Copy 👍");  // Reset button text
  };

  return (
    <div className="App bg-gray-900 h-screen text-black flex flex-col items-center justify-center ">
      <BsChatLeftTextFill className="bg-transparent w-[50px] h-[50px] absolute top-[385px] right-[820px] "></BsChatLeftTextFill>
      <PiArrowsCounterClockwiseFill className="bg-transparent w-[50px] h-[50px] absolute top-[470px] right-[820px]" />
      <h1 className="mb-[20px] text-violet-800 text-[25px] justify-center font-bold absolute top-[25%] ">Text Multiplier for Sarah </h1>
      <input
        type="text"
        className="mt-1 pl-3 py-2 w-[300px] h-[80px] flex"
        placeholder="Text here..."
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        className="mt-1 pl-3 py-2  w-[300px] h-[80px] flex"
        placeholder="Amount here..."
        onChange={(e) => setVal(e.target.value)}
      />
      <button
        onClick={clip}
        className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 mt-2 rounded flex w-32 justify-center active:bg-blue-500"
      >
        {button}
      </button>
    </div>
  );
}

export default App;
