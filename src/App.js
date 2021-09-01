import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AccountButton from './components/AccountButton.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import NavBar from './components/NavBar.jsx';
import { useState } from 'react';


function App() {

  const [ signedInUser, setSignedInUser ] = useState('TestUser');

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <AccountButton signedInUser={signedInUser}/>
        <MainContent signedInUser={signedInUser}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
