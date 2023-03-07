import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { API } from "./global"
import Stripecheckout from './Stripecheckout';



export function Checkout() {

  const { id, checkout } = useParams();
  // const product = productList[id];

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`${API}/products/${id}`)
      .then((data) => data.json())
      .then((pd) => setProduct(pd))
  }, [id, checkout])

  const navigate = useNavigate();

  const styles = {
    color: "green",
    textDecoration: "underline"
  }

  // const { handleSubmit, values, handleBlur, handleChange, touched, errors } = useFormik({
  //   initialValues: {
  //     name: "",
  //     phone: "",
  //     address: "",
  //   },
  //   validationSchema: checkOutValidationSchema,
  //   onSubmit: (values) => {
  //     checkOutForm(values)
  //   },
  // })
  // const checkOutForm = () => navigate('/order-success')

  return (
    <div className='checkout-page'>
      <AppBar className='navbar' position="relative">
        <Toolbar>
          <Typography onClick={() => navigate('/products')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fur<span className='logo-F'>ni</span>ture
          </Typography>
          <Button onClick={() => navigate('/products')} color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
      <div className='checkout-container'>
        <h2>CHECKOUT</h2>
        {/* <p>{checkout}</p> */}
        <div className='checkout-box'>
          <div>
            <p><strong>{product.name}</strong></p>
            <p style={styles}>In Stock.</p>
            <p>Hiring for <strong>{checkout / product.rate} months</strong>.</p>
            <p>
              Total - <span className='product-rate'>
                <strong>₹ <span>{checkout}</span>.00</strong></span>
            </p>
          </div>
          <div className='checkout-box-img'>
            <img src={product.poster} alt={product.name} />
          </div>
          <Stripecheckout totalprice= {checkout}/>
        </div>
      </div>
    </div>
  );
}
