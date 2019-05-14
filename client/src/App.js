import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import About from './components/about';
import Contact from './components/contact';
import Error from './components/error';
import Navigation from './components/navigation';
import './app.css';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
