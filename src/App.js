import React from "react";

const list = [];

//leaf Component
const List = props =>
props.list.map((item) => (
    <div key={item.objectId}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span key={item.objectId}>{item.author}</span>
          <span key={item.objectId}>{item.points}</span>
          <span key={item.objectId}>{item.author}</span>
      </div>
    
  ));

// root Component
function App() {
  const stories = [
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
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const handlerChange = e => {
    setSearchTerm(e.target.value);
  }
  return (
    <div className="App">
      <h1>Hello Moto Mami</h1>
      <hr />
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handlerChange} />
      
      <p> Searching for <strong>{searchTerm}</strong> </p>
      <List list={stories}/>
    </div>
  );
}

export default App;
