import React from 'react'
import './Header.css';
import './demo.css';
import './normalize.css';
import { Link } from 'react-router-dom';
import logo from './img/logo_blanco.png';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Hidden from '@material-ui/core/Hidden';
import { slide as Menu } from 'react-burger-menu'
import MenuIcon from '@material-ui/icons/Menu';


function Header({activo}) {

    return (
        <div>
            <Hidden only="xs">
                <nav className="header menu menu--antonio">
                    <Link  to="/">
                        <img className="header__logo" src={logo} alt=""/>
                    </Link>
                    <ul className="menu__list">
                        <li className={`menu__item ${activo===`/` ? "menu__item--current" : ""}`}>
                            <Link  to="/" className="menu__link">Inicio</Link >
                        </li>
                        <li className={`menu__item ${activo===`productos` ? "menu__item--current" : ""}`}>
                            <Link  to="/productos" className="menu__link">Productos</Link>
                        </li>
                        <li className={`menu__item ${activo===`sobre-nosotros` ? "menu__item--current" : ""}`}>
                            <Link  to="/sobre-nosotros" className="menu__link">Sobre Nosotros</Link>
                        </li>         
                    </ul>      
                </nav> 
            </Hidden>
           
            <Hidden only={['sm', 'md', 'lg', 'xl']}>
                <div className="header__movil"> 
                    <MenuIcon/>
                    <Menu  isOpen={ false }>
                        <a id="home" className="menu-item" href="/"> <Link  to="/" className="menu__link">Inicio</Link></a>
                        <a id="about" className="menu-item" href="/about"><Link  to="/productos" className="menu__link">Productos</Link ></a>
                        <a id="contact" className="menu-item" href="/contact"> <Link  to="/sobre-nosotros" className="menu__link">Sobre mi</Link></a>
                    </Menu>
                </div>
            </Hidden>
          
            
        </div>
    )
}

export default Header
