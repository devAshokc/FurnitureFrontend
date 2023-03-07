import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function OrderSuccess() {
  const navigate = useNavigate();
  const styles = {
    color: "green"
  };
  const handleClick = ()=>{
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }
  return (
    <div>
      <AppBar className='navbar' position="relative">
        <Toolbar>
          <Typography onClick={() => navigate('/products')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fur<span className='logo-F'>ni</span>ture
          </Typography>
          <Button onClick={() => navigate('/products')} color="inherit">Home</Button>
          <Button onClick={handleClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <div className='order-success'>
        <h3 style={styles}>Order successfully placed.</h3>
        <h4>Thank you for shopping. Visit again.</h4>
      </div>
    </div>
  );
}
