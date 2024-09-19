import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting="Bem-vindo à Minha Loja!" />
            {/* Outros componentes da sua aplicação */}
        </div>
    );
}

export default App;
