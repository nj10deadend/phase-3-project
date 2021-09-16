import logo from './logo.svg';
import {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
// import UserList from './Components/UserList';
import UsersList from './Components/UsersList';

// import TransactionHistory from './Components/TransactionHistory';
import './App.css';

function App() {


  const [itemsList, setItemsList] = useState( [] );

  const [userList, setUserList] = useState( [] );

  const [transactionsList, setTransactionsList] = useState( [] );


  //GET FETCH everything function
    function fetchItemsAndUsers () {

      const getFetchGroceries = () => {
        fetch('http://localhost:9292/items')
        .then(response => response.json())
        .then(fetchedGoods => {
          // console.log(fetchedGoods)
          setItemsList(fetchedGoods);
        });
      }
      getFetchGroceries();

      const getFetchUsers = () => {
        fetch('http://localhost:9292/users')
        .then(response => response.json())
        .then(fetchedUsers => {
          // console.log(fetchedUsers)
          setUserList(fetchedUsers);
        });
      } 
      getFetchUsers();
      
    }

  useEffect(fetchItemsAndUsers, [])


  ////////////////////////////////////////////////////


  // Items GET Fetch
  // const getFetchGroceries = () => {
  //   fetch('http://localhost:9292/items')
  //   .then(response => response.json())
  //   .then(fetchedGoods => {
  //     // console.log(fetchedGoods)
  //     setItemsList(fetchedGoods);
  //   });
  // } 
  // useEffect(getFetchGroceries, [])

  // Users GET Fetch

  // const getFetchUsers = () => {
  //   fetch('http://localhost:9292/users')
  //   .then(response => response.json())
  //   .then(fetchedUsers => {
  //     // console.log(fetchedUsers)
  //     setUserList(fetchedUsers);
  //   });
  // } 
  // useEffect(getFetchUsers, [])

  // TransactionHistory GET Fetch
  const getFetchTransactions = () => {
    fetch('http://localhost:9292/transactions')
    .then(response => response.json())
    .then(fetchedTransactions => {
      // console.log(fetchedUsers)
      setTransactionsList(fetchedTransactions);
    });
  } 



  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <UsersList fetchedUsers={userList} />

          
          <ItemList fetchedItems={itemsList}/> 
        </Route>
        <Route path="/transactions">
          {/* <TransactionHistory fetchedTransactions={transactionsList}/> */}


        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>


      
      




     
    </div>
  );
}

export default App;
