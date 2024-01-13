import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenido a la Tienda</h1>
        <ItemListContainer greeting="¡Gracias por visitarnos!" />
      
      </main>
    </div>
  );
}

export default App;