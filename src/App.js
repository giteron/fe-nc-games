import './App.css';
import AccountButton from './components/AccountButton';
import Header from './components/Header';
import MainContent from './components/MainContent';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <AccountButton />
      <MainContent />
    </div>
  );
}

export default App;
