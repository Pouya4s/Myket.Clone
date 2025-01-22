import './App.css';
// import { getJson, postJson, deleteJson } from './fetch';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './MainLayout';
import Layout from './Layout';
import Games from './components/Games/Main';
import Details from './components/Details/Main';
import Apps from './components/Apps/Main';
import Movies from './components/Movies/Main';
import Developers from './components/Developers/Main';
import MainAdmin from './components/Developers/AdminMain';
import AdminCategorys from './components/Developers/AdminCategorys';
import AdminApps from './components/Developers/AdminApplications';
import AdminGames from './components/Developers/AdminCatAppRel';
import AdminLayout from './components/Developers/AdminLayout';
import Search from './components/Search/Main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route element={<MainLayout/>}>
                <Route index path='/' element={<Main/>}/>
                <Route index path='/home' element={<Main/>}/>
                <Route index path='/Search' element={<Search/>}/>
            </Route>
            
            <Route element={<Layout/>}>
                <Route path='/Games' element={<Games/>}/>
                
                <Route path='/Apps' element={<Apps/>}/>
                
                <Route path='/Details' element={<Details/>}/>
                
                <Route path='/Movies' element={<Movies/>}/>
                <Route path='/Developers' element={<Developers/>}/>
                <Route element={<AdminLayout/>}>
                    <Route path='/Developers/Admin' element={<MainAdmin/>}/>
                    <Route path='/Developers/Admin/categorys' element={<AdminCategorys/>}/>
                    <Route path='/Developers/Admin/applications' element={<AdminApps/>}/>
                    <Route path='/Developers/Admin/CatAppRel' element={<AdminGames/>}/>
                </Route>
            </Route>
            <Route path="*" element={(<h1 className='text-center mt-5 text-4xl'>404 Not Found</h1>)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

