import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './components/about';
import Contact from './components/contact';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>
);

export default App;
