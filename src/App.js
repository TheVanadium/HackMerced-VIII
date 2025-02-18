
import './App.css';
import Tracks from './Components/Tracks.js';
import FAQ from './Components/FAQ.js'
import NavBar from './Components/NavBar.js';
import MainPage from './Components/MainPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <MainPage/>
      <Tracks/>
      <FAQ/>
      <footer></footer>
    </div>
  );
}

export default App;
