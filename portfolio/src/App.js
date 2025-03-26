import logo from '../src/logo.png';
import './App.css';

// Conhecido como JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="navigation-area">
          <div>
            <a >INÍCIO</a>
          </div>
          <div>
            <a className="navigation-area">SOBRE</a>
          </div>
          <div>
            <a className="navigation-area">PROJETOS</a>
          </div>
          <div>
            <a className="navigation-area">HABILIDADES</a>
          </div>
        </nav>
        <div className="language">
          <a>eng-us</a>
        </div>
      </header>
        <h2>
          Olá  , eu me chamo
        </h2>
        <div className="name">
          <h1 className="first-name">
            <span className="letra-cor">G</span>
            <span className="letra-cor">E</span>
            <span className="letra-cor">R</span>
            <span className="letra-cor">A</span>
            <span className="letra-cor">L</span>
            <span className="letra-cor">D</span>
            <span className="letra-cor">O</span>
          </h1>
          <h1 className="last-name">
            <span className="letra-cor">J</span>
            <span className="letra-cor">Ú</span>
            <span className="letra-cor">N</span>
            <span className="letra-cor">I</span>
            <span className="letra-cor">O</span>
            <span className="letra-cor-fixa">R</span>
          </h1>
        </div>
    </div>
  );
}

export default App;
