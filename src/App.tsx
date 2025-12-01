import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Pane from "./Pane";

const textArray = [
  { text: 'UMBRELLA "RODEM" SYSTEM', timeout: 2000 },
  { text: "Version 6.66.0", timeout: 2000 },
  { text: "", timeout: 1000 },
  { text: "", timeout: 1000 },
  {
    text: "Hello Kendall. This is Alyssa Ashcroft.",
    timeout: 2500,
  },
  {
    text: "First off, congratulations on your birthday,",
    timeout: 2500,
  },
  {
    text: "though as you may guess, I'm not here to bring you cake...",
    timeout: 2500,
  },
  { text: "", timeout: 1000 },
  {
    text: "I'm writing to ask you for help with a... situation...",
    timeout: 2500,
  },
  {
    text: "it's regarding my daughter.",
    timeout: 2500,
  },
  { text: "", timeout: 1000 },
  {
    text: "I'm sure you're already aware she is planning to get",
    timeout: 2400,
  },
  {
    text: "involved in that whole ordeal, with going back",
    timeout: 2200,
  },
  {
    text: "to Raccoon City.",
    timeout: 1000,
  },
  { text: "", timeout: 1000 },
  {
    text: "I have a bad feeling about this...",
    timeout: 2500,
  },
  {
    text: "that's why I need your help. With your wits, and",
    timeout: 2500,
  },
  {
    text: "courage, I know for a fact she'll be alright.",
    timeout: 2500,
  },
  {
    text: "You'll find the details in the attachment.",
    timeout: 2500,
  },
  {
    text: "Don't forget... February 26, 2026.",
    timeout: 2500,
  },
];

function App() {
  const [cursor, setCursor] = useState(0);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      if (cursor < textArray.length - 1) {
        setCursor((cursor) => cursor + 1);
      } else {
        setShowCta(true)
        clearInterval(stepInterval);
      }
    }, textArray[cursor].timeout);

    return () => {
      clearInterval(stepInterval);
    };
  }, [cursor]);

  return (
    <div className="container">
      <Pane title="Incoming Message">
        {textArray.map((value, index) => (
          <Fragment key={index}>
            <span
              className={
                cursor === index ? "typewriter" : cursor > index ? "" : "hidden"
              }
            >
              {value.text}
            </span>
            <br />
          </Fragment>
        ))}
      </Pane>
      {showCta && (
        <Pane title="Attachment" className="attachment">
          <a href="https://www.google.com">Click here to accept the mission</a>
        </Pane>
      )}
    </div>
  );
}

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat justo nec varius consequat. Morbi fringilla justo nec ipsum aliquam, vitae venenatis ante vehicula. Duis molestie in turpis sed condimentum. Proin iaculis rutrum mi, eget hendrerit nunc dignissim eget. Vestibulum quis justo a urna hendrerit venenatis sed id nulla. Phasellus varius leo dolor, sed pulvinar sapien porta eget. Proin pharetra at augue gravida dapibus. Quisque egestas facilisis urna, id porta orci tempus vitae. Suspendisse eu neque bibendum purus maximus commodo et ac ex. Praesent ornare ex ultrices felis interdum pharetra. Curabitur interdum ultricies neque, et porta nibh. Curabitur fringilla nunc eu dolor sodales, at pulvinar odio pulvinar. Phasellus a orci magna. Proin consequat condimentum eleifend. Quisque ultricies pellentesque ligula faucibus hendrerit. Sed quis consequat dolor.

export default App;
