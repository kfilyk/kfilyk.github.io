import "./style.css";

function Sep() {
return (<var className="sep"> | </var>);
}

function Plus() {
return (<b className="plus">+</b>);
}

const Body = (props) => {
    return (
      <body>
        <div className="header">
          <a href={'images/resume.pdf'} download="kelvin_filyk_resume.pdf" className="logo"><span className="cv"><img src={'images/resume.png'} alt="cv"/></span><span className="name">KELVIN FILYK</span></a>
          <a href="">KELVIN FILYK</a> {/* prevents sliding header elements from dissapearing underneath logo */}
          <a href="https://kfilyk.github.io/roots/">ROOTS</a>
          <a href="https://github.com/kfilyk/s2mosaic">S2MOSAIC</a>
          <a href="https://github.com/kfilyk/cpp_accelerated_image_quantization">K-MEANS SEGMENTATION (C++)</a>
          <a href="https://certn-dash.herokuapp.com/">CERTN DASHBOARD</a>
          <a href="https://carechanger.herokuapp.com/">CARECHANGER</a>
          <a href="https://kfilyk.github.io/petri/">PETRI</a>

          <a>QUORACLE</a>
          <a>MORI DUNOM</a>
        </div>
        <img src={'images/doodle.jpg'} className="headshot" alt="headshot" />
        <p>
        <h1>I am a full-stack software engineer based on the west coast 🍁. </h1>
          C++ {Sep()} SQL {Sep()} Jenkins {Sep()} Git {Sep()} Go {Sep()} Typescript {Plus()}<br />
          PyTorch {Sep()} Keras {Sep()} OpenCV {Sep()} GIS {Plus()}{Plus()} <br />
          AWS {Sep()} Django {Sep()} React {Sep()} DevOps {Sep()} Tensorflow {Plus()}{Plus()}{Plus()}<br />
        </p>
        <div className="link_container">
          <a className="link" href="mailto:kelvinfilyk@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={'images/email.png'} height='40px'/>
          </a>
          <a className="link" href="https://www.linkedin.com/in/kfilyk/" target="_blank" rel="noopener noreferrer">
            <img src={'images/linkedin.png'} height='40px'/>
          </a>
          <a className="link" href="https://github.com/kfilyk" target="_blank" rel="noopener noreferrer">
            <img src={'images/github.png'} height='40px'/>
          </a>
        </div>
      </body>
    )
}

export default Body