import './App.css';
import { Link } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <header className="App-header">
      <h1>Woo</h1>
      <Link to="three">three</Link>
      <Link to="d3">D3</Link>
      <Link to="svg">SVG</Link>

      </header>
      
     
    </div> 
  );
}

export default App;
