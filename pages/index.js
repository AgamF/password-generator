import { Fragment, useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import getRandomCharset from "../components/constants";

export default function HomePage() {
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(8);

  function sum(arr) {
    let total = "";
    for (let character of arr) {
      total += character;
    }
    return total;
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function pushIntoPassword() {
    let str = "";
    if (charCount === 8) {
      for (let i = 0; i < 2; i++) {
        const { s, l, u, n } = getRandomCharset();
        const arr = shuffle([s,l,u,n]);
        const values = sum(arr);
        str += values;
      }
    } else if (charCount === 4) {
      const { s, l, u, n } = getRandomCharset();
      const arr = shuffle([s,l,u,n]);
      const values = sum(arr);
      str += values;
    } else {
      for (let i = 0; i < 4; i++) {
        const { s, l, u, n } = getRandomCharset();
        const arr = shuffle([s,l,u,n]);
        const values = sum(arr);
        str += values;
      }
    }
    setPassword(str);
    setText("Password: 👇")
  }

  return (
    <Fragment>
      <Head>
        <title>Password Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className="wrapper">
        <h1 style={{ fontSize: "60px" }} id="title">Password Generator</h1>
        <div id="radio">
          <button onClick={() => {
            pushIntoPassword(charCount);
            document.getElementById("copy-btn").style.display = "";
          }}>Generate a random password</button>
          <div>
            <input onClick={() => setCharCount(4)} type="radio" name="charcount"/>
            <label>4 Characters</label><br/>
            <input onClick={() => setCharCount(8)} type="radio" name="charcount"/>
            <label>8 Characters</label><br/>
            <input onClick={() => setCharCount(16)} type="radio" name="charcount"/>
            <label>16 Characters</label>
          </div>
        </div>
        <p id="note">*Note that if the amount of characters is not specified, the value will be set to 8 by default.</p>
        <div className="hero">
          <h1>{text}</h1>
          <h1>{password}</h1>
          <br/>
          <button onClick={() => {
            navigator.clipboard.writeText(password)
            .then(() => alert(`Password copied to clipboard`))
          }} id="copy-btn" style={{ display: "none" }}>Copy 📄</button>
        </div>
      </div>
    </Fragment>
  );
}