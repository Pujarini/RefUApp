import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='myDashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}
// 92E3A9
export default App;
