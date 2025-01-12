// import './App.css';
// import { getJson, postJson, deleteJson } from './fetch';
import Header from './NotMainHeader';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';



function Layout() {
  return (
    <div className="App bg-slate-300">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Layout;

