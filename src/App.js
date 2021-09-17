import logo from './logo.svg';
import {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import ItemList from './Components/ItemList';
import UsersList from './Components/UsersList';
import './App.css';

function App() {
  const [itemsList, setItemsList] = useState( [] );
  const [userList, setUserList] = useState( [] );
  // const [transactionsList, setTransactionsList] = useState( [] );
  //GET FETCH Users and Items function
    function fetchItemsUsersAndTransactions () {
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

  useEffect(fetchItemsUsersAndTransactions, [])

/// Delete fetch for Users
  function deleteUser (userToDelete) {
    const id = userToDelete.id
    fetch(`http://localhost:9292/users/${id}`, {
      method: 'DELETE'
    })
    let usersRemaining = userList.filter(eachUser => 
      eachUser.id !== userToDelete.id
    )
    setUserList([...usersRemaining])
  }

 return (
    <div className="App">
      <Header />
          <UsersList deleteUserFunction={deleteUser} fetchedUsers={userList} />
      <Switch>
        <Route exact path="/">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <ItemList fetchedItems={itemsList}/> 
          </header>
        </Route>
        <Route path="/transactions">
          {/* <TransactionHistory fetchedUsersForTransactions={userList}/> */}
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>

    </div>
  );
}

export default App;