import './App.css';
import 'fontsource-roboto';

import BakelsHeader from './components/BakelsHeader'
import BakelsLinks from './components/BakelsLinks'
import BakelsProjects from './components/BakelsProjects'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BakelsHeader/>
        <br/>
        <BakelsLinks/>
        <br/>
        <br/>
        <BakelsProjects/>
        <br/>
      </header>
      <br/>
      <br/>
      <footer>
        <img
        style={{display: 'flex'}}
        src="assets/thanks.png"
        alt="Secret corgi sitting saying thank you"
        ></img>
      </footer>
    </div>
  );
}

export default App;
