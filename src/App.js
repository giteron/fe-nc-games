import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AccountButton from './components/AccountButton.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import NavBar from './components/NavBar.jsx';
import { useMemo, useState } from 'react';
import { UserContext } from './UserContext';


function App() {
  
  const [ signedInUser, setSignedInUser ] = useState({
    username: 'happyamy2016',
    avatar_url: 'https://art.ngfiles.com/images/989000/989754_kidneyjohn_mr-happy.jpg?f1565692026',
    name: 'Amy Happy'
  });

  const userValue = useMemo(() => ({ signedInUser, setSignedInUser}), [ signedInUser, setSignedInUser ]);

  console.log(signedInUser)

  return (
    <BrowserRouter>
      <UserContext.Provider value={userValue}>
        <div className="App">
          <Header />
          <NavBar />
          <AccountButton />
          <MainContent />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
