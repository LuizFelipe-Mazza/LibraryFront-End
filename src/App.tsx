import { ProviderFormContainer } from './pages/containers/providerFormContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { RegisterUser } from './pages/RegisterUser/RegisterUser'
import { PublicPage } from './pages/Screen/Public/PublicPage'
import { NewBook } from './pages/RegisterBook/NewBook'
import { Login } from './pages/Login/Login'

import ProviderList from './pages/containers/ProviderList'
import { FinalCart } from './pages/FinalCart/FinalCart'
import { Cart } from './pages/Cart/Cart'
import { CartContextProvider } from './context/CartContext'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <CartContextProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Routes>
              <Route path="/" children element={<PublicPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registeruser" element={<RegisterUser />} />
              <Route path="/update/:id" element={<ProviderFormContainer />} />
              <Route path="/table" element={<ProviderList />} />
              <Route path="/newbook" element={<NewBook />} />
              <Route path="/book/:product_code" element={<Cart />} />
              <Route path="/mycart" element={<FinalCart />} />
            </Routes>
          </CartContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
