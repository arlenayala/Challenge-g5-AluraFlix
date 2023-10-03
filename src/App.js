
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import DefaultPage from './components/DefaultPage';
import HomePage from './Pages/HomePage';
import Form from './components/Form';
import Category from './components/Category';
import { CategoriasProvider } from './components/CategoriasContext'; // Importa el contexto

function App() {

  const [videoListHomePage, setVideoListHomePage] = useState([]);

  // Función para agregar un video a la lista de HomePage
  const agregarVideoToHomePage = (nuevoVideo) => {
    setVideoListHomePage([...videoListHomePage, nuevoVideo]);
  };
  return (
    <Router>
      <div>
        <GlobalStyle />
        <CategoriasProvider> {/* Envuelve toda la aplicación con el proveedor de contexto */}
          <DefaultPage>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/formulario" element={<Form agregarVideoToHomePage={agregarVideoToHomePage}  />} />
              <Route path="/NuevaCategoria" element={<Category />} />
            </Routes>
          </DefaultPage>
        </CategoriasProvider>
      </div>
    </Router>
  );
}

export default App;

