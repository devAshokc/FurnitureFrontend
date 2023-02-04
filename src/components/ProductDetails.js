import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { PriceDetails } from "./PriceDetails";
import { useEffect, useState } from 'react';
import { API } from "./global"

export function ProductDetails() {
  // const styles = {

  // };
  const { id } = useParams();
  // const product = productList[id];

  // products from api
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`${API}/products/${id}`)
      .then((data) => data.json())
      .then((pd) => setProduct(pd))
  }, [id])

  const navigate = useNavigate();
  return (
    <div>
      <AppBar className='navbar' position="static">
        <Toolbar>
          <Typography onClick={() => navigate('/products')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fur<span className='logo-F'>ni</span>ture
          </Typography>
          <Button onClick={() => navigate('/products')} color="inherit">Back to Products</Button>
        </Toolbar>
      </AppBar>
      <div className='product-details'>
        <div className='content-1'>
          <div className='content-1-box'>
            <img src={product.poster} alt={product.name} />
            <div className='content-1-details'>
              <div className='content-1-description'>
                <h2>{product.name}</h2>
                <p><strong>PRODUCT DETAILS - </strong>{product.details}</p>
                <p><strong>SIZE DETAILS - </strong>{product.size}</p>
              </div>
              <div className='content-1-details-rate'>
                <p className='product-rate'><strong>₹ <span>{product.rate}</span> </strong>/month</p>
              </div>
            </div>
          </div>
        </div>
        <div className='content-2'>
          <div className='content-2-box'>
            <h3 style={{ textDecoration: "underline" }}>PRICE DETAILS</h3>
            <p>Price - <span className='product-rate'><strong>₹ <span>{product.rate}</span> </strong>/month</span></p>
            <PriceDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
