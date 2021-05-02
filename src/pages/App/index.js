import logo from '../../images/logo.png';
import './styles.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link
          className="App-link"
          to="/theory"
        >
          Теория
        </Link>
        <Link
          className="App-link"
          to="/tasks"
        >
          Упражнения
        </Link>
      </header>
    </div>
  );
}

export default App;
