import {React , useState , useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from'./components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Productstwo from './components/Product/Productstwo';
import Cart from './components/Cart/Cart';
import { commerce } from './lib/commerce';

import {legoData} from './components/Products/data';
import {shoeData} from './components/Products/data';
import Feature from './components/Feature/Feature';
import Checkout from './components/Checkout/Checkout'



function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order,setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('')
  
  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async(productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity});

    setCart(cart);
  }

  const handleRemoveFromCart = async(productId) => {
    const {cart} = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async() => {
    const {cart} = await commerce.cart.empty();

    setCart(cart);
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  
  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);
  
  console.log(cart);

  return (
  <Router>
    <Navbar totalItems={cart.total_items}/>
    <Hero />
    <Products heading='Featured Legos' data={legoData}/>
    <Feature/>
    <Products heading='Featured Shoes' data={shoeData}/>
    <Switch>
      <Route exact path = '/'>
      <Productstwo products = {products} onAddToCart={handleAddToCart}/>
      </Route>

      <Route exact path = '/cart'>
      <Cart cart={cart}
      handleUpdateCartQty = {handleUpdateCartQty} 
      handleRemoveFromCart = {handleRemoveFromCart} 
      handleEmptyCart = {handleEmptyCart}
      />
      </Route>
      <Route exact path ='/checkout'>
        <Checkout 
        cart={cart}
        order={order}
        onCaptureCheckout={handleCaptureCheckout}
        error={errorMessage}
        />
      </Route>

    </Switch>
    
    </Router>
  );
}

export default App ;
