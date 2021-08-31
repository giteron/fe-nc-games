import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AccountButton from './components/AccountButton';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <AccountButton />
      <MainContent>
        <Switch>
          <Route exact path="/">
          <p className="sidebar">This is the home page</p>
          </Route>
          <Route exact path="/create">
          <p className="sidebar">Write a new review here</p>
          </Route>
          <Route exact path="/reviews">
          <p className="sidebar">This will show a list of reviews</p>
          </Route>
          <Route exact path="/categories">
            <p className="sidebar">This will show all categories</p>
          </Route>
          <Route exact path="/users">
          <p className="sidebar">This will display all users</p>
          </Route>
        </Switch>
      </MainContent>
    </div>
    </BrowserRouter>
  );
}

export default App;
