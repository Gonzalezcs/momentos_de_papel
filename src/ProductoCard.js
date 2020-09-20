import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Grid from "@material-ui/core/Grid";

import Popover from '@material-ui/core/Popover';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import './ProductoCard.css';
import { WhatsappShareButton } from 'react-share';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight:275
  },
  fuente:{
    fontFamily: 'Berkshire Swash',
    textAlign:'center'
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  button: {
    backgroundColor:'rgb(192, 94, 159)',
    color:'#ffffff',
    '&:hover': {
      backgroundColor: 'rgb(97, 19, 71)',
      color:'#ffffff'
    },
  }
}));

function ProductCard(producto) {


  const [producto_data, setProductData] = useState({});
  const [image, setImage] = useState([]);

  
  useEffect(() => {
    setProductData(producto.producto);

    setImage(producto.producto.images[0].original);
  },[]);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorEl2(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Album Portada"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"  className={classes.fuente}>
            {producto_data.nombre}
          </Typography>
          <Grid container justify = "center">
          <Chip 
              size="small"
              icon={<SwapVertIcon/>}
              label={`${producto_data.largo}cm`}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
           />
           <Chip  
                size="small"
                icon={<SwapHorizIcon/>} 
                label={`${producto_data.ancho}cm`}
                aria-owns={open2 ? 'pop' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen2}
                onMouseLeave={handlePopoverClose2}
            />
          </Grid>
          
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
            <Typography>Largo Álbum</Typography>
          </Popover>
          
         
          <Popover
              id="pop"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={open2}
              anchorEl={anchorEl2}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose2}
              disableRestoreFocus
            >
            <Typography>Ancho Álbum</Typography>
          </Popover>
        </CardContent>
      </CardActionArea>
      <Grid container justify = "center">
        <CardActions>
        <ButtonGroup disableElevation variant="contained" color="default">
          <Link to={`/producto/${producto_data.id_producto}`}>
            <Button size="small" variant="contained" className={classes.button}>
              Ver Producto
            </Button>
          </Link>
        
          <Button size="small" variant="contained" color="secondary">
            <WhatsappShareButton url={"http://localhost:3000/producto/1"} ><ShareIcon/></WhatsappShareButton>
          </Button>
        
        </ButtonGroup>
        </CardActions>
        </Grid>
    </Card>
  );
}

export default ProductCard
