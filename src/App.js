import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AccountButton from './components/AccountButton';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';


function App() {

  // const [usersList, setUsersList] = useState([]);

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
