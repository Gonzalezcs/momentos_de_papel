import React from 'react'
import './Producto.css'
import './image-gallery.css'
import ImageGallery from 'react-image-gallery';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import data from './api_json.json';

function Producto() {

    let { id } = useParams();
    
    const [producto_data, setProductData] = useState({});
    const [images, setImages] = useState([]);

    useEffect(() => {
      window.scrollTo(0, 0);
      var result = (data.productos).filter(function(person) {
        return person.id_producto == {id}.id;
      });

      setProductData(result[0]);
      setImages(result[0].images);

    },[]);


    return (
        <div className="producto">
             <Grid container spacing={5}>

                <Grid item xs={12} sm={7}>
                  <div className="producto__left">
                      <ImageGallery 
                          thumbnailPosition={"left"}
                          autoPlay={true} 
                          items={images}
                          slideDuration={600}
                          swipingTransitionDuration={5000}
                      />
                  </div>
                </Grid>
                
                <Grid item xs={12} sm={5}>
                  <div className="producto__right">
                      <h1>{producto_data.nombre}</h1>
                      <div className="producto__dimensiones">
                          <h3 className="producto__titulo">Dimensiones</h3>
                          <span>Largo: {producto_data.largo} Centrimetros</span>
                          <span>Ancho: {producto_data.ancho} Centrimetros</span>
                      </div>
                      <div className="producto__descripcion">
                        <span className="producto__titulo">Descripción</span>
                        <p>Estructura, páginas por ambos lados para rellenar, además de elementos decorativos, bolsillos y desplegables.</p>
                      </div>
                      <Button variant="contained">
                          <WhatsAppIcon style={{ fontSize: 28,marginLeft: 1,marginBottom:5}} /> <a href={"https://api.whatsapp.com/send?phone=982858212&text=Deseo consultar por el album http://www.momentosdepapel.cl:3000/producto/"+producto_data.id_producto} style={{color:'#ffff'}}>Consultar por album</a>
                      </Button>
                  </div>
                </Grid>
                
             </Grid>
                
               
        </div>
    )
}

export default Producto
