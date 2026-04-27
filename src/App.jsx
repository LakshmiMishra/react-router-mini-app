import{Route,Routes} from 'react-router-dom';
import './App.css';
import {ProductList} from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Admin } from './pages/Admin';
import { PageNotFound } from './pages/PageNotFound';
import { ContactIn } from './components/ContactIn';
import { ContactEu } from './components/ContactEu';
import { ContactUs } from './components/ContactUs';

function App() {
  const isadmin = true;
  return (
   
    <div className="App">
     <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<ProductList/>}></Route>
      <Route path="/products/:id" element={<ProductDetail/>}></Route>
      <Route path="contact" element={<Contact/>}>

        <Route path="in" element={<ContactIn/>}></Route>
        <Route path="eu" element={<ContactEu/>}></Route>
        <Route path="us" element={<ContactUs/>}></Route>
      </Route>
      <Route path="/admin" element={isadmin? <Admin/>:<PageNotFound/>}></Route>
      <Route path="*" element ={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;