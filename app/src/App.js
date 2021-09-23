import logo from './logo.svg';
import './App.css';
import Crypto from './components/crypto';
import Header from './components/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Crypto />
    </div>
  );
}

export default App;