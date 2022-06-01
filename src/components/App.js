import '../styles/App.css';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import Testnav from './testnav';
import { Routes,Route, Link } from "react-router-dom";





function App() {
  return (
    <div className='start'>
      <Header/>
      <Footer/>
      <Card/>
      <Testnav/>

     <Routes>
     <Route path='/' element={<Footer/>} />
     <Route path='testChemin' element={<Card/>} />
     <Route path='/' element={<Header/>} />
     <Route path='/' element={<Testnav/>} />
     </Routes>
    </div>
  );
}

export default App;

