import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Product } from "./Product";
import { useEffect, useState } from 'react';
import { API } from "./global"

export function ProductList() {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetch(`${API}/products`)
      .then((data) => data.json())
      .then((pds) => setProductList(pds))
  }, [])
  const handleClick = ()=>{
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div>
      <AppBar className='navbar' position="static">
        <Toolbar>
          <Typography onClick={() => navigate('/')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fur<span className='logo-F'>ni</span>ture
          </Typography>
          <Button onClick={() => navigate('/products/add-product')} color="inherit">Add Product</Button>
          <Button onClick={handleClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <div className='product-list-container'>
        {productList.map((pd) => <Product key={pd.id} product={pd} id={pd.id} />)}
      </div>
    </div>
  );
}
