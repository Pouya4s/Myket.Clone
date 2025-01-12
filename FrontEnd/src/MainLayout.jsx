// import './App.css';
// import { getJson, postJson, deleteJson } from './fetch';
// import Header from './components/Main/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';



function MainLayout() {
  return (
    <div className="App bg-slate-300">
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default MainLayout;

