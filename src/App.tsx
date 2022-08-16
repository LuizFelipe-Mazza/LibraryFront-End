import { ProviderFormContainer } from './pages/containers/providerFormContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { RegisterUser } from './pages/RegisterUser/RegisterUser';
import { Presentation } from './pages/Presentation/Presentation';
import { PublicPage } from './pages/Screen/Public/PublicPage';
import { NewBook } from './pages/RegisterBook/NewBook';
import { About } from './pages/About/About';
import { Login } from './pages/Login/Login';

import  ProviderList  from './pages/containers/ProviderList';
import { Cart } from './pages/Cart/Cart';
import { MyCart } from './components/Modal/MyCart';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <AuthContextProvider>
        <Routes>
          <Route path="/"  children element={<PublicPage />} />
          <Route path="/welcome" children element={<Presentation/>} />
          <Route path="/aboutlibrary" element={<About/>} />
          <Route path="/login"  element={<Login />} />
          <Route path="/registeruser"  element={<RegisterUser />} />
          <Route path="/update/:id" element={<ProviderFormContainer/>} />
          <Route path='/table' element={<ProviderList/>} />
          <Route path='/newbook'element={<NewBook/>} />
           <Route path='/book/:product_code'element={<Cart/>}/> 
          <Route path='/mycart'element={<MyCart/>}/> 
        </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
