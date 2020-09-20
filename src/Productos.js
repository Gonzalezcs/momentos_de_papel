import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import ProductCard from './ProductoCard';
import './Productos.css';
import {useState, useEffect} from 'react';
import data from './api_json.json';

function Productos() {

    const [producto_data, setProductData] = useState(data.productos);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="productos">
            <Container>
                <Grid container spacing={3}>
                    {producto_data.map((value, index) => 
                        <Grid item xs={12} md={3} key={value.id}>
                            <ProductCard producto={value}/>
                        </Grid> 
                    )}
                </Grid>   
           </Container>
        </div>
    )
}

export default Productos
