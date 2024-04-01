import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function CaesarCipher() {
  const [inputText, setInputText] = useState("");
  const [shiftAmount, setShiftAmount] = useState(0);
  const [outputText, setOutputText] = useState("");

  const encryptText = () => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
      let charCode = inputText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode(
          ((charCode - 65 + shiftAmount) % 26) + 65
        );
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode(
          ((charCode - 97 + shiftAmount) % 26) + 97
        );
      } else {
        result += inputText[i];
      }
    }
    setOutputText(result);
  };

  return (
    <div>
      <header className="App-header">Caesar Cipher</header>
      
      <div className="containt">
        <label htmlFor="inputText">Enter text to encrypt:</label>
        <input
          type="text"
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="shiftAmount">Enter shift amount:</label>
        <input
          type="number"
          id="shiftAmount"
          value={shiftAmount}
          onChange={(e) => setShiftAmount(parseInt(e.target.value))}
        />
      </div>
      <div>
        <button onClick={encryptText}>Encrypt</button>
      </div>
      <div>
        <label htmlFor="outputText">Encrypted text:</label>
        <textarea id="outputText" value={outputText} readOnly />
      </div>
    </div>
  );
}

export default CaesarCipher;
