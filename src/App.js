import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarLogin from './Components/Uitily/NavbarLogin';
import Footer from './Components/Uitily/Footer';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import AllCategory from './Pages/Category/AllCategory';
import AllBrand from './Pages/Brand/AllBrand';
import ShopProducts from './Pages/Products/ShopProducts';

function App() {
  return (
    <div className='almarai-regular'>
      <NavbarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/categories' element={<AllCategory />} />
          <Route path='/brands' element={<AllBrand />} />
          <Route path='/products' element={<ShopProducts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
