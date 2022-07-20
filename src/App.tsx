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
          <Route path="/"  index={false} children element={<PublicHeader />} />
          <Route path="/welcome" index={false} element={<Presentation/>} />
          <Route path="/aboutlibrary" index={false} element={<About/>} />
          <Route path="/login" index={false}  element={<Login />} />
          <Route path="/update/:id" index={false}  element={<ProviderFormContainer/>} />
          <Route path='/table' index={false}element={<ProviderList/>} />
          <Route path='/newbook' index={false}element={<NewBook/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
