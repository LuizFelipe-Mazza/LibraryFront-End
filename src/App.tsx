import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicHeader } from './pages/Screen/PublicHeader/PublicHeader';
import { ProviderFormContainer } from './pages/containers/providerFormContainer';
import  ProviderList  from './pages/containers/ProviderList';
import { Login } from './pages/Login/Login';
import { Presentation } from './pages/Presentation/Presentation';
import { About } from './pages/About/About';
import { NewBook } from './pages/RegisterBook/NewBook';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/"  index={false} element={<PublicHeader />} />
          <Route path="/welcome" element={<Presentation/>} />
          <Route path="/aboutlibrary" element={<About/>} />
          <Route path="/login"  element={<Login />} />
          <Route path="/update/:id"  element={<ProviderFormContainer/>} />
          <Route path='/table'element={<ProviderList/>} />
          <Route path='/newbook'element={<NewBook/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
