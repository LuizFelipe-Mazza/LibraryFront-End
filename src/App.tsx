import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicHeader } from './pages/Headers/PublicHeader';
import { Register } from './pages/Form/Register';
import { Login } from './pages/Login/Login';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/"  index={false} element={<PublicHeader />} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
