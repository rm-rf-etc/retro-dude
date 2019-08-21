import React from 'react';
import { scan, bind } from 'react-gun';

const Item = ({ name, clickHandler }) => (
  <div className="item" onClick={clickHandler}>
    <span>{name}</span>
  </div>
);

const App = scan(({
  '@state': { list = [] },
  '@methods': { create, splice },
}) => (
  <div className="app">
    <h1>Types</h1>
    <div className="align-right">
      <button onClick={create}>+</button>
    </div>
    {list.map(({ name }, id) => (
      <Item clickHandler={splice(id)} key={name} name={name} />
    ))}
  </div>
));

const methods = (getState, { put }) => ({
  create: () => {
    const list = getState('list');
    const name = prompt();
    if (name) {
      list.push({ name });
      put('list', list);
    }
  },
  splice: (index) => () => {
    let list = getState('list');
    list.splice(index, 1);
    put('list', list);
  },
});
const schema = {
  list: {
    type: 'stringified',
    default: [],
  },
};
export default bind('types', methods, schema)(App);
