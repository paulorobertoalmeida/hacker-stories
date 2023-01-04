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

const Search = props => {
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onChange} />
  </div>
  }

 // props.onSearch(event);
  
  return (
    <div>
      <label htmlFor="search"> Search </label>
      <input id="search" type="text" onChange={props.onSearch} />

      <p>
        Searching for <strong> {searchTerm} </strong>
      </p>
      
    </div>
  )
}


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
  
  const handleSearch = event => {
    console.log(event.target.value);
  }
  return (
    <div className="">
      <h1>Hello Moto Mami</h1>
      <Search onChange={handleSearch}/>
      <hr />
      {/* <label htmlFor="search">Search: </label>
       <input id="search" type="text" onChange={handleChange} /> 
      
      <p> Searching for <strong>{searchTerm}</strong> </p> */}
      <List list={stories}/>
    </div>
  );
};

export default App;
