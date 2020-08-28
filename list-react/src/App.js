import React from 'react';

import MainPost from './components/MainPost';

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={MainPost} />
        <Route path="/post/:id" component={SinglePost} />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
