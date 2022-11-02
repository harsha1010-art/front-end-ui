import Nav from './components/nav';
import './App.css';
import Intro from './components/intro';
import Explore from './components/explore'
import Card from './components/card';
import Works from './components/works';
import Client from './components/client';
import Team from './components/team';
import Contact from './components/contact';
import Blog from './components/blog';
import Footer from './components/footer';
//import {RemoveScroll} from 'react-remove-scroll';

function App() {
  return (
    <div className="App">
      <>
      <Nav />
      <Intro />
      <Explore />
      <Card />
      <Works/>
      <Client/>
      <Team/>
      <Contact/>
      <Blog/>
      <Footer/>
      </>
      
    </div>
  );
}

export default App;
