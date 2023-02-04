import './App.css';
import Hexagon_Grid_Float from './components/basic/graphics/Hexagon_Grid/Hexagon_Grid_Float';

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <h1>Woo</h1>
      <Hexagon_Grid_Float size={25} margin={2} count={256} color1={"#00ffa6"} />
      </header>
      
     
    </div> 
  );
}

export default App;
