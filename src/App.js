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
    avatar_url: 'https://i.pinimg.com/736x/4f/3f/96/4f3f96245a44bb3b3d4f98036560048c.jpg',
    name: 'Bob Jones'
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
