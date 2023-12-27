
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';

import Row from './components/Row';
import requests from './requests';


function App() {

  
  return (
    <div className="App">
     <Nav/>
     <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isPoster={true} title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
