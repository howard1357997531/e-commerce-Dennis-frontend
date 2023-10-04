import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreenn from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";

import { Container } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

// 7 50 50
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="py-5">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreenn />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:productId?" element={<CartScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />

              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// npm install redux react-redux redux-thunk redux-devtools-extension
// redux-thunk: allow us to us asynchronous request from our action creators
// it's sort of like a middleware to our store

// redux-devtools-extension: this is that library that's actually going to allow us to connect
// our store to that brower extension (搜尋 redux devtools)
