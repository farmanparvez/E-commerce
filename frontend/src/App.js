import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
// import CCSContainer from './components/Container'
// import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/Home/HomeScreen'
import ProductScreen from './screens/ProductDetail/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/AdminProduct/ProductListScreen'
import ProductEditScreen from './screens/AdminProduct/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import MenFashion from './screens/MenFashion/MenFashion'
import WominFashion from './screens/WomenFashion/WominFashion'
import Electronics from './screens/Electronics/Electronics'
// import { ToastContainer, toast } from 'react-toastify';
// import { useDispatch } from 'react-redux'
// import { getUserInfo } from './redux/actions/userActions'

const App = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if(localStorage.getItem('Etoken')) dispatch(getUserInfo())
  // })

  return (
    <Router>
      {/* <Header /> */}
      <main >
        {/* <Container> */}
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product' component={ProductEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/mens-fashion' component={MenFashion} exact />
          <Route path='/womens-fashion' component={WominFashion} exact />
          <Route path='/electronics' component={Electronics} exact />
          <Route path='/' component={HomeScreen} exact />
        {/* </Container> */}
      </main>
      <Footer />
    </Router>
  )
}

export default App
