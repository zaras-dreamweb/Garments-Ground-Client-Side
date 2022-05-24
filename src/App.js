import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import RequiredAuth from './pages/Authentication/RequireAuth';
import AddReview from './pages/DashBoard/AddReview';
import Dashboard from './pages/DashBoard/Dashboard';
import MakeAdmin from './pages/DashBoard/MakeAdmin';
import MyOrders from './pages/DashBoard/MyOrders';
import MyProfile from './pages/DashBoard/MyProfile';
import Payment from './pages/DashBoard/Payment';
import Home from './pages/Home/Home';
import Purchase from './pages/Home/Purchase';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={
          <RequiredAuth>
            <Purchase></Purchase>
          </RequiredAuth>
        }></Route>


        <Route path='/dashboard' element={
          <RequiredAuth>
            <Dashboard></Dashboard>
          </RequiredAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='admin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
        </Route>


        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
