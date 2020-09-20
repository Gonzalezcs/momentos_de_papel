import React from 'react';
import './SobreNosotros.css';
import Grid from "@material-ui/core/Grid";
import { Container } from '@material-ui/core';
import {useState, useEffect} from 'react';
import {WhatsappShareButton} from 'react-share';
  


function SobreNosotros() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sobreNosotros">
           <Container className="sobreNosotros__container">
            <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                            <h1 className="sobreNosotros__titulo">Sobre Nosotros</h1>
                            <p className="sobreNosotros__descripcion">
                                Momentosdepapel.cl Somos una tienda de scrap que busca adaptar cada diseño de un álbum al gusto del cliente,
                                Por medio de una diversa gamma de materiales y técnicas de Scrapbooking que te permitiran plasmar tus recuerdos de manera creativa, didactica y entretenida.
                            </p>
                            <p className="sobreNosotros__descripcion">Personalizamos tu idea y te damos la posibilidad de contar tu historia, a traves de fotografías, frases, recortes, stickers que describiran todo aquello que viviste en esos momentos.
                            </p>
                            <p className="sobreNosotros__descripcion">¡Tomamos tu ideas, personalizamos tu álbum y lo hacemos realidad !.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img className="sobreNosotros__img" src="https://scontent.fscl18-1.fna.fbcdn.net/v/t1.0-9/119184361_117902503377313_7698145919174442935_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=HVaobU1U35UAX--sT8_&_nc_ht=scontent.fscl18-1.fna&oh=41f3670a52efe0cefaece7c8aee5cdcb&oe=5F831D74"></img>
                    </Grid>
                </Grid>
            </Container>
            
           
        </div>
    )
}

export default SobreNosotros
