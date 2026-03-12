import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Header } from './components/layout/Header';
import { Navbar } from './components/layout/Navbar';


function App() {
  return (
    <>
      <Header />
      {/* Estructura base lista. Aquí cargaremos el Router. */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/history' element={<Dashboard />} />
        <Route path='/simulator' element={<Dashboard />} />
      </Routes>
      <Navbar />

    </>
  )
}

export default App
