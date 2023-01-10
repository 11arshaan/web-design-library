import './App.css';
import { Canvas2D } from './components/canvas/Canvas';
import Sketch1 from './components/canvas/ClickCircle';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <Sketch1 id="c"  setup={{fullscreen: true, click: true}} style={{}} />
      </header>
     
    </div> 
  );
}

export default App;
