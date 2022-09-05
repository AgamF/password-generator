import { Fragment } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";

export default function LearnMore() {
  return (
    <Fragment>
      <Head>
        <title>Password Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      <div className="learnmore-field">
        <h1>About this project</h1>
        <div>
          <p>I made this project with an aim to improve my javascript skills, especially at React.js<br/>
          Note that this project is not meant for serious use <br/> 
          and i highly encourage you NOT to use it for serious purposes.<br/>
          This is a very early version of the website,<br/> 
          therefore it might be vulnerable to security issues.</p>
        </div>
        <div>
          <p>This project was made using Next.js, and some React hooks.<br/>
          Thanks for checking it out! 😄
          </p>
        </div>
      </div>
    </Fragment>
  );
}