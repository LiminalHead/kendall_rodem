import { Fragment, useEffect, useState } from 'react'
import './App.css'
import Pane from './Pane'

const textArray = ['UMBRELLA "RODEM" SYSTEM', 'Version 6.66.0'];

function App() {
  const [cursor, setCursor] = useState(0);
  
  useEffect(() => {
    const stepInterval = setInterval(() => {
      if (cursor < textArray.length - 1) {
        setCursor(cursor => (cursor + 1));
      } else {
        clearInterval(stepInterval);
      }
    }, 2000);

    return () => {
      clearInterval(stepInterval);
    };
  }, [cursor])

  return (
    <>
      <Pane>
        {textArray.map((value, index) => (
          <Fragment key={index}>
            <span
              className={cursor === index ? 'typewriter' : (cursor > index ? '' : 'hidden')}
              >
                {value}
            </span>
            <br />
          </Fragment>
        ))}
      </Pane>
    </>
  )
}


// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat justo nec varius consequat. Morbi fringilla justo nec ipsum aliquam, vitae venenatis ante vehicula. Duis molestie in turpis sed condimentum. Proin iaculis rutrum mi, eget hendrerit nunc dignissim eget. Vestibulum quis justo a urna hendrerit venenatis sed id nulla. Phasellus varius leo dolor, sed pulvinar sapien porta eget. Proin pharetra at augue gravida dapibus. Quisque egestas facilisis urna, id porta orci tempus vitae. Suspendisse eu neque bibendum purus maximus commodo et ac ex. Praesent ornare ex ultrices felis interdum pharetra. Curabitur interdum ultricies neque, et porta nibh. Curabitur fringilla nunc eu dolor sodales, at pulvinar odio pulvinar. Phasellus a orci magna. Proin consequat condimentum eleifend. Quisque ultricies pellentesque ligula faucibus hendrerit. Sed quis consequat dolor.

export default App
