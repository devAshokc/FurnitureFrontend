import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductList } from './components/ProductList';
import { AddProduct } from './components/AddProduct';
import { ProductDetails } from './components/ProductDetails';
import { Checkout } from './components/Checkout';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
import { OrderSuccess } from './components/OrderSuccess';


function App() {

  return (
    <div className="App">
      <div className='routes-container'>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList  />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/users/signup' element={<Signup />} />
          <Route path='/products/add-product' element={<AddProduct  />} />
          <Route path='/products/:id' element={<ProductDetails  />} />
          <Route path='/products/:id/:checkout' element={<Checkout />} />
          <Route path='/order-success' element={<OrderSuccess />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  );
}


export default App;