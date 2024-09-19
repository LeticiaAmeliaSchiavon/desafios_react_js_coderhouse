import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ReactDOM from 'react-dom';
import { CartProvider } from './CartContext';
import App from './App';

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

ReactDOM.render(
    <CartProvider>
      <App />
    </CartProvider>,
    document.getElementById('root')
  );

export default App;
