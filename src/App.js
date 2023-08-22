import Landing from './screens/Landing';
import Stats from "./screens/Stats"
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <Landing></Landing>
    <Stats></Stats>
    </div>
  );
}

export default App;
