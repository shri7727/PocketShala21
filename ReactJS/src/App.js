import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login.js';
import Footer from './components/Footer.js';
import Category from './components/Category.js';
import Class from './components/Class.js';
import Adminlogin from './components/AdminLogin.js';
import AdminHeader from './components/AdminHeader.js';
import AddProduct from './components/AddProduct.js';
import Register from './components/Register.js';
import ViewProducts from './components/ViewProducts.js';
import ViewCustomer from './components/ViewCustomer.js';
import ViewCategory from './components/ViewCategory.js';
import ViewOrders from './components/ViewOrders.js';
import ViewOrderbyuid from './components/ViewOrderbyuid.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Payment from './components/Payment.js';
import  AddCategory from './components/AddCategory.js';
import ForgetPassword from './components/ForgetPassword.js';
import ResetPassword from './components/ResetPassword.js';
import MyOrderplaced from './components/MyOrderplaced.js';
import Aboutus from './components/Aboutus';
import Announcement from './components/Announcement';
import Slider from './components/Slider';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';

function App() {
 
  return (
    <Router>
    <div className="App">
      <Switch>
          
        <Route path="/checkout">
          <Announcement/>
          <Header/>
          <Checkout />
          <Footer/>
          </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          
          <Register/>
          
        </Route>
        <Route path="/payment">
          <Payment />
          <Footer/>
        </Route>
        <Route path="/adminlogin">
          <Adminlogin />
        </Route>
        <Route path="/admin">
          <AdminHeader />
        </Route>
        <Route path="/addcategory">
          <AdminHeader />
          <AddCategory/>
        </Route>
        <Route path="/viewproducts">
          <AdminHeader />
          <ViewProducts />
        </Route>
        <Route path="/viewcustomer">
          <AdminHeader />
          <ViewCustomer />
        </Route>
        <Route path="/vieworders">
          <AdminHeader />
          <ViewOrders />
        </Route>
        <Route path="/viewcategory">
          <AdminHeader />
          <ViewCategory />
        </Route>
        <Route path="/addproduct">
          <AdminHeader />
          <AddProduct/>
        </Route>
        
        <Route path="/forgetpass">
          <ForgetPassword/>
          <Footer/>
        </Route>
        <Route path="/reset">
          <ResetPassword/>
          <Footer/>
        </Route>
        <Route path="/order">
          <Header/>
          <ViewOrderbyuid />
          <Footer/>
        </Route>
        <Route path="/placed">
          <MyOrderplaced />
        </Route>
        <Route path="/category">
          <Header/>
          <Category />
          <Footer/>
        </Route>
       {/*  <Route path="/class">
          <Header/>
          <Class/>
          <Footer/>
        </Route> */}
        <Route path="/Aboutus">
          <Header/>
          <Aboutus />
          <Footer/>
        </Route>
        <Route path="/First">
          <Header/>
          <First/>
          <Footer/>
        </Route>
       
        <Route path="/Second">
          <Header/>
          <Second/>
          <Footer/>
        </Route>
        <Route path="/Third">
          <Header/>
          <Third/>
          <Footer/>
        </Route>
        <Route path="/Fourth">
          <Header/>
          <Fourth/>
          <Footer/>
        </Route>
        <Route path="/Fifth">
          <Header/>
          <Fifth/>
          <Footer/>
        </Route>
        <Route path="/Sixth">
          <Header/>
          <Sixth/>
          <Footer/>
        </Route>
        <Route path="/Seventh">
          <Header/>
          <Seventh/>
          <Footer/>
        </Route>
        <Route path="/">
        <Announcement/>
          <Header/>
          <Slider/>
          <Home />
          <Footer/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}
export default App;
