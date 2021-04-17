import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Tasks() {
  return (
    <div className="Tasks">
      <h3>Выберите правильный вариант</h3>
      <p>Ex in in pariatur proident laborum tempor voluptate id culpa in.<br />

         Consectetur duis fugiat enim esse occaecat dolore minim esse ullamco commodo. Id pariatur tempor dolore magna <span className="h-green">enim</span> qui non ullamco. Fugiat ex aliquip velit et voluptate dolore ea do officia mollit proident esse minim ex. </p>


      <Link
        className="App-link"
        to=""
      >
        На главную
        </Link>

    </div>
  );
}

export default Tasks;
