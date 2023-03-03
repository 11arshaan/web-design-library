import './App.css';
import { Link } from 'react-router-dom';
import LabNavbar from './components/basic/navigation/LabNavbar/LabNavbar';
import { Outlet } from 'react-router-dom';
import ComponentModal from './components/basic/utility/ComponentModal/ComponentModal';

function App() {


  return (
    <div className="app">
      <LabNavbar />
      <Outlet />
      <ComponentModal />
      
     
    </div> 
  );
}

export default App;
