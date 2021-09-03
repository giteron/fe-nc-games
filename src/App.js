import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AccountButton from './components/AccountButton.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import NavBar from './components/NavBar.jsx';
import { useState } from 'react';


function App() {

  const [ signedInUser ] = useState({
    username: 'happyamy2016',
    avatar_url: 'https://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729',
    name: 'Amy Happy'
  });

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
