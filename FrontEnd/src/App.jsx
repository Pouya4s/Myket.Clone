import './App.css';
// import { getJson, postJson, deleteJson } from './fetch';
import Main from './components/Main/Main';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import MainLayout from './MainLayout';
import Layout from './Layout';
import Games from './components/Games/Main';
import Details from './components/Details/Main';
import Apps from './components/Apps/Main';
import Movies from './components/Movies/Main';
import Developers from './components/Developers/Main';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Main/>}/>
        </Route>
        <Route element={<Layout/>}>
          <Route path='/Games' element={<Games/>}/>
          <Route path='/Apps' element={<Apps/>}/>
          <Route path='/Movies' element={<Movies/>}/>
          <Route path='/Developers' element={<Developers/>}/>
          <Route path='/Details' element={<Details/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

