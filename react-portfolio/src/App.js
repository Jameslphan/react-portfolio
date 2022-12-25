import './App.scss';
import About from './components/About/index';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Portfolio from './components/Portfolio/index';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
