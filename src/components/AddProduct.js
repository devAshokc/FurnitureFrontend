import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { API } from "./global"

const productValidationSchema = yup.object({
  name: yup.string().required("Why not fill this Product Name?").min(2),
  rate: yup.number().required("Why not fill this Product Rate?").min(1),
  poster: yup.string().required("Why not fill this Product Poster Link?").min(5),
  size: yup.string().required("Why not fill this Product Size Details?").min(5),
  details: yup.string().required("Why not fill this Product Details?").min(15),
  material: yup.string().required("Why not fill this Product Material?").min(3),
})

export function AddProduct() {
  const navigate = useNavigate();

  // const [name, setName] = useState("");
  // const [rate, setRate] = useState("");
  // const [poster, setPoster] = useState("");
  // const [size, setSize] = useState("");
  // const [details, setDetails] = useState("");
  // const [material, setMaterial] = useState("");

  const { handleSubmit, values, handleBlur, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rate: "",
      details: "",
      size: "",
      material: ""
    },
    validationSchema: productValidationSchema,
    onSubmit: (newProduct) => {
      console.log("Product Details", newProduct)
      addProduct(newProduct)
    }
  })

  const addProduct = (newProduct) => {
    // const newProduct = {
    //   name: name,
    //   poster: poster,
    //   rate: rate,
    //   details: details,
    //   size: size,
    //   material: material
    // };
    // setProductList([...productList, newProduct]);

    fetch(`${API}/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: { "Content-Type": "application/json", },
    })
      // .then((data) => data.json())
      // .then((pd) => console.log(pd))
      .then(() => navigate("/products"))
      .catch((err) => console.log("Error occurred", err))
  }

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
      <form onSubmit={handleSubmit} className='add-product-form'>
        <h2>ADD NEW PRODUCT</h2>

        <TextField
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}

          id="outlined-basic"
          label="Product Name"
          variant="outlined"
        // onChange={(e) => setName(e.target.value)} 
        />

        <TextField
          name="rate"
          value={values.rate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rate && errors.rate}
          helperText={touched.rate && errors.rate ? errors.rate : null}

          id="outlined-basic"
          label="Product Rate"
          variant="outlined"
        // onChange={(e) => setRate(e.target.value)} 
        />

        <TextField
          name="poster"
          value={values.poster}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster ? errors.poster : null}

          id="outlined-basic"
          label="Product Poster url"
          variant="outlined"
        // onChange={(e) => setPoster(e.target.value)} 
        />

        <TextField
          name="details"
          value={values.details}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.details && errors.details}
          helperText={touched.details && errors.details ? errors.details : null}

          id="outlined-basic"
          label="Product Details"
          variant="outlined"
        // onChange={(e) => setDetails(e.target.value)} 
        />

        <TextField
          name="size"
          value={values.size}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.size && errors.size}
          helperText={touched.size && errors.size ? errors.size : null}

          id="outlined-basic"
          label="Product Size Dimensions"
          variant="outlined"
        // onChange={(e) => setSize(e.target.value)} 
        />

        <TextField
          name="material"
          value={values.material}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.material && errors.material}
          helperText={touched.material && errors.material ? errors.material : null}

          id="outlined-basic"
          label="Product Material Type"
          variant="outlined"
        // onChange={(e) => setMaterial(e.target.value)} 
        />

        {/* <p>{name}-{rate}-{poster}-{details}-{size}-{material}</p> */}
        <Button
          // onClick={addProduct}
          type='submit'
          variant="contained"
        >Add Product
        </Button>
      </form>
    </div>
  );
}
