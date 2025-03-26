import logo from '../src/logo.png';
import './App.css';

// Conhecido como JSX
function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />

        <nav className="navbar">
          <a href="/">INÍCIO</a>
          <a href="/">SOBRE</a>
          <a href="/">PROJETOS</a>
          <a href="/">HABILIDADES</a>
        </nav>
      </header>
      <div className="sec-inicio">
        <div>
          <h2>
            Olá 👋, eu me chamo
          </h2>
        </div>
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
        <div className="escrevendo-cargo">
          v Desenvolvedor WEB |
        </div>
      </div>
      <div className="sec-sobre">
        Sobre mim
      </div>
      <div className="sec-projetos">
        meus projetos
      </div>
      <div className="sec-habilidades">
        habilidades técnicas
      </div>
    </div>
  );
}

export default App;
