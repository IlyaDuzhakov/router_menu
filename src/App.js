import './App.css';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import TimeAttackPage from './components/TimeAttackPage';
import { Routes, Route } from 'react-router-dom';

// Routes - контейнер для всех путей
// Route - один путь (маршрут)

export default function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/drift' element={<DriftPage />}/>
        <Route path='/forza' element={<ForzaPage />}/>
        <Route path='/timeattack' element={<TimeAttackPage />}/>
      </Routes>
    </div>
  );
}




