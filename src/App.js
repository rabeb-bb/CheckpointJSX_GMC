
import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxWidth: "100vw"}}>
        <h1 className="title red">Name here</h1>
        <br/>
        <img src={imageInSrc} alt="image in src"></img>
        <br/>
        <img src="/imageInPublic.jpg" alt="image in public"></img>
      </div>
      <video width='320' height='240' controls>
        <source src="myVideo.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
