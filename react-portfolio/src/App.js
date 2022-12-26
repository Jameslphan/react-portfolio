import './App.scss';
import About from './components/About/index';
import Sidebar from './components/Sidebar/index';
import Footer from './components/Footer/index';
//import Portfolio from './components/Portfolio/index';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
