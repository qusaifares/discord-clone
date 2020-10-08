import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
