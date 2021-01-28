import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent'
import Navbar from './components/NavbarComponent';
import Project from './components/ProjectComponent';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div>
          <Main />
          <Project />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
