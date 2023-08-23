import Landing from './screens/Landing';
import Stats from "./screens/Stats"
import Section3 from './screens/Screen3';
import NavBar from './components/NavBar';
import { Link, Element } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Landing></Landing>
      <Stats></Stats>
      <Section3></Section3>
    </div>
  );
}

export default App;
