import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ReactDOM from 'react-dom';
import { CartProvider } from './CartContext';
import App from './App';
import Cart from './Cart';

const Cart = () => <div>Seu carrinho está vazio.</div>;

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={() => <ItemListContainer greeting="Bem-vindo à Minha Loja!" />} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router>
    );
}

const MainApp = () => (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </CartProvider>
  );

ReactDOM.render(
    <CartProvider>
      <App />
    </CartProvider>,
    document.getElementById('root')
  );

export default App;
