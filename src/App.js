import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Home/Products';
import Purchase from './pages/Home/Purchase';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products/:id' element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}

export default App;
