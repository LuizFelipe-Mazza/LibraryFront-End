import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PublicHeader } from './pages/Headers/PublicHeader';
import { ProviderFormContainer } from './pages/containers/providerFormContainer';
import  TableContainer  from './pages/containers/TableContainer';
import { Login } from './pages/Login/Login';
import { Presentation } from './pages/Presentation/Presentation';
import { About } from './pages/Presentation/About';



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
          <Route path='/table'element={<TableContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
