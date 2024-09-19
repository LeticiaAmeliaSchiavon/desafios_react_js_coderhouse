import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="Bem-vindo à Minha Loja!" />
            <ItemDetailContainer />
            {/* Outros componentes da sua aplicação */}
        </div>
    );
}

export default App;
