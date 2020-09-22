import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green, blue, deepOrange } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer__row footer_row_up">
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                    <div className="footer__acerca">
                        <h3>Acerca de</h3>
                        <p>Momentosdepapel.cl Somos una tienda de Scrap que busca adaptar cada diseño de un álbum al gusto del cliente,
                                por medio de una diversa gama de materiales y técnicas de Scrapbooking que te permitirán plasmar tus recuerdos de manera creativa, didáctica y entretenida.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <div className="footer__categorias">
                        <h3>Categorías</h3>
                        <ul>
                            <Link to="/productos">
                                <li className="footer__categorias__ul__li">Productos</li>
                            </Link>
                            <Link to="/sobre-nosotros">
                                <li className="footer__categorias__ul__li">Sobre Nosotros</li>
                            </Link> 
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} sm={3}>
                <div className="footer__contacto">
                    <h3>Contacto</h3>
                    <ul>
                        <li>Correo: momentosdepapel.c@gmail.com</li>
                        <li>Teléfono: +56 934085555</li>
                    </ul>
                </div>
                </Grid>
            </Grid>
          </div>
          <div className="footer__row footer_row_down">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={10}>
                        <p className="footer__copyright">Copyright © 2020 Todos los derechos reservados Momentos de Papel.</p>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <ul className="footer__redessociales">
                            <li>
                                <a href="http://www.facebook.com" target="_blank">
                                    <FacebookIcon  style={{ color: blue[700], fontSize: 30}}/>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/momentos.depapel?igshid=1cwcakg0gyhml" target="_blank">
                                    <InstagramIcon  style={{ color: deepOrange[500], fontSize: 30}}/>
                                </a>
                            </li>
                            <li><a href="https://api.whatsapp.com/send?phone=+56934085555&text=Me gustarí­a saber más sobre esta tienda" target="_blank">
                                <WhatsAppIcon style={{ color: green[500],fontSize: 30}} />
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>    
            </div>
      
            
        </footer>
    )
}

export default Footer
