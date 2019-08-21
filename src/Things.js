import React from 'react';
import { scan } from 'react-gun';

const App = scan(({
  '@state': { things },
}) => (
  <div className="app">
    <header>
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <span>React is life</span>
    </header>
  </div>
));

export default App;
