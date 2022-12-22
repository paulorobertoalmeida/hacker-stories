import React from "react";

const list = [
  {
    title: 'React',
    url: 'http://reactjs.org',
    author: 'Jordan Walke',
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'http://redux.js.org',
    author: 'Dan Abromov',
    points: 5,
    objectId: 1,
  },
  {
    title: 'Harry Potter',
    url: 'http://harrypotter.com',
    author: 'JK rolling',
    points: 7,
    objectId: 2,
  }
]

//leaf Component
function List() {
  return list.map((item) => {
    return (
      <div>
        <ul>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <li key={item.objectId}>{item.author}</li>
          <li key={item.objectId}>{item.points}</li>
          <li key={item.objectId}>{item.author}</li>
        </ul>
      </div>
    );
  });
}
// root Component
function App() {
  const handlerChange = event => {
    console.log(event);
  }
  return (
    <div className="App">
      <h1>Hello Moto Mami</h1>
      <hr />
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handlerChange} />
      <List />
    </div>
  );
}

export default App;
