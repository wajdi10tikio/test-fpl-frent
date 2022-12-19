import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'
import login from './components/login';
import addClient from './components/addClient';
import addCategorie from './components/addCategorie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Redirect to="/connexion" />

          <Route path="/Connexion" element={login} />

          <Route path="/Addclient" element={addClient} />

          <Route path="/Addcategorie" element={addCategorie} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
