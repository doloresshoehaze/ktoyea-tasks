import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './pages/App';
import Theory from './pages/Theory';
import Tasks from './pages/Tasks';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/theory'>
          <Theory />
        </Route>
        <Route path='/tasks'>
          <Tasks />
        </Route>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);