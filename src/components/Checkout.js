import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { API } from "./global"
import * as yup from "yup"
import { useFormik } from 'formik';

const checkOutValidationSchema = yup.object({
  name: yup.string().required("Why not fill this Name?").min(1),
  phone: yup.string().required("Why not fill this Phone Number?").min(10).max(10),
  address: yup.string().required("Why not fill this Address?").min(15),
})

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

  const { handleSubmit, values, handleBlur, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      phone: "",
      address: "",
    },
    validationSchema: checkOutValidationSchema,
    onSubmit: (values) => {
      checkOutForm(values)
    },
  })
  const checkOutForm = () => navigate('/order-success')

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
        </div>
        <form onSubmit={handleSubmit} className='checkout-form'>
          <h3>CHECKOUT-FORM</h3>
          <TextField
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errors.name : null}

            className='textfield-checkout'
            type='text'
            label="Name on Order"
            variant="outlined"
          />

          <TextField
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && errors.phone}
            helperText={touched.phone && errors.phone ? errors.phone : null}

            className='textfield-checkout'
            type='text'
            label="Mobile Number"
            variant="outlined"
          />

          <TextField
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.address && errors.address}
            helperText={touched.address && errors.address ? errors.address : null}

            className='textfield-checkout'
            type='text'
            label="Address on Order"
            variant="outlined"
          />

          <Button
            type='submit'
            variant="contained"
          // onClick={() => navigate('/order-success')}
          >
            Confirm Order
          </Button>
        </form>
      </div>
    </div>
  );
}
