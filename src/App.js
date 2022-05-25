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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './pages/Authentication/RequireAdmin';
import AddProducts from './pages/DashBoard/AddProducts';
import ManageProducts from './pages/DashBoard/ManageProducts';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import Footer from './pages/Shared/Footer';
import Blog from './pages/Blog/Blog';

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
          {/* <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route> */}
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path='order' element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='admin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
          <Route path='product' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>}></Route>
          <Route path='manage' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
        </Route>


        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/port' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
