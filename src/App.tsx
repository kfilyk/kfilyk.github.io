import React from 'react';
import "./style.css";
import styles from "./style.css";

import doodle from "./doodle.jpg";

function Sep() {
  return (<var className={styles.sep}> | </var>);
}

function Plus() {
  return (<b className={styles.plus}>+</b>);
}

const App: React.FC = (props) => {
  return (
    <div className="App">
      <div className={styles.header}>
        <a>KELVIN FILYK</a>
        <a href="https://github.com/kfilyk/s2mosaic">S2MOSAIC</a>
        <a href="https://github.com/kfilyk/cpp_accelerated_image_quantization">K-MEANS SEGMENTATION (C++)</a>
        <a>CERTN DASHBOARD</a>
        <a>CARECHANGER</a>
        <a>QUORACLE</a>
        <a>MORI DUNOM</a>
        <a>PETRI</a>
      </div>
      <body className={styles.body}>
        <img src={doodle} className={styles.headshot} alt="headshot" />
        
        <p>
        <h1>I am a software engineer based on the west coast 🍁. </h1>
          C++ {Sep()} SQL {Sep()} Jenkins {Sep()} Git {Sep()} Go {Plus()} <br />
          Node {Sep()} Django {Sep()} React {Sep()} Typescript {Plus()}{Plus()} <br />
          Tensorflow {Sep()} PyTorch {Sep()} Keras {Sep()} OpenCV {Plus()}{Plus()}{Plus()}<br />
        </p>
        <a
          className={styles.link}
          href="mailto:kelvinfilyk@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/kfilyk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          className={styles.link}
          href="https://github.com/kfilyk"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        
      </body>
    </div>
  );
}

export default App;