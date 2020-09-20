import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Productos from './Productos';
import Producto from './Producto';
import Ofertas from './Ofertas';
import Footer from './Footer';
import SobreNosotros from './SobreNosotros';
import Contacto from './Contacto';

function App() {

  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/productos">
            <Header activo={"productos"}/>
            <Productos />
            <Footer/>
          </Route>

          <Route path="/ofertas">
            <Header activo={"ofertas"}/>
            <Ofertas/>
            <Footer/>
          </Route>

          <Route path="/contacto">
            <Header activo={"contacto"} />
            <Contacto />
            <Footer/>
          </Route>

          <Route path="/sobre-nosotros">
            <Header activo={"sobre-nosotros"} />
            <SobreNosotros />
            <Footer/>
          </Route>

          <Route path="/producto/:id" component={Producto}>
            <Header activo={"/producto"} />
            <Producto />
            <Footer/>
          </Route>

          {/* Pagina por defecto de la aplicación*/}
          <Route path="/">
            <Header activo={"/"} />
            <Home />
            <Footer/>
          </Route>
 
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
