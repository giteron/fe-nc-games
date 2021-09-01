import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AccountButton from './components/AccountButton.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import NavBar from './components/NavBar.jsx';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <AccountButton />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
