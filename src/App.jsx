import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import home from './Component/homePage/homePage'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
