import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import * as yup from "yup"
import { useFormik } from 'formik';
import { API } from './global';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/system';

const loginValidationSchema = yup.object({
  email: yup.string().required("Why not fill this e-mail ID?").min(8),
  password: yup.string().required("Why not fill this Password?").min(8),
})

export function Login() {
  const navigate = useNavigate();

  const { handleSubmit, values, handleBlur, handleChange, touched, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (loginUser) => {
      addList(loginUser)
    }
  })
  const addList = (loginUser) => {
    fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: { "Content-Type": "application/json" }
    })
      .then((data) => data.json())
      .then(data => {
        console.log(data)
        if (data) {
          localStorage.setItem("Authorization", data.token)
          if (data.message === "Successful login") {
            navigate(`/products`)
            toast.success('Success login !', {
              position: toast.POSITION.TOP_RIGHT
          })
          } else {
            toast.error(`Invalid Credentials`, {
              position:toast.POSITION.TOP_RIGHT
              })
          }
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="home-fr">
      <Card className='auth-container'elevation={5}>
        <form onSubmit={handleSubmit} className='auth-form'>
          <h2>LOGIN</h2>
          <TextField
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            helperText={touched.email && errors.email ? errors.email : null}
            className='textfield-auth'
            label="e-mail ID"
            variant="outlined"
          />

          <TextField
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && errors.password}
            helperText={touched.password && errors.password ? errors.password : null}
            className='textfield-auth'
            type='password'
            label="Password"
            variant="outlined"
          />

          <Button
            type='submit'
            className='button-auth'
            variant="contained"
          >
            L<span>ogin</span>
          </Button>
        <Box sx={{display:"flex",flexDirection:"column",textAlign:"center",  gap:1,  marginBottom:"1rem"}}>
          <Link className='auth-link' to="/users/signup">Create new account</Link>
          <Link onClick={()=>navigate(-1)}>Back</Link>
          </Box>
        </form>
      </Card>
    </div>
  );
}
