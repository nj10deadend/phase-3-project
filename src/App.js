import logo from './logo.svg';
import {useState, useEffect} from 'react';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import './App.css';

function App() {


  const [groceries, setGroceries] = useState( [] );


  const getFetchGroceries = () => {
    fetch('http://localhost:9292')
    .then(response => response.json())
    .then(fetchedGoods => {
      console.log(fetchedGoods)
      setGroceries(fetchedGoods);
    });
  } 

  useEffect(getFetchGroceries, [])

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ItemList fetchedGroceries={groceries}/>


    
    </div>
  );
}

export default App;
