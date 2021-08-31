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
          <Route exact path="/categories">This will show categories</Route>
        </Switch>
      </MainContent>
    </div>
    </BrowserRouter>
  );
}

export default App;
