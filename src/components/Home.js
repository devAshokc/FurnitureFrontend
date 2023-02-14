import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Home() {
  const navigate = useNavigate();
  return (
    <div className='home-sd'>
      <AppBar className='navbar' position="relative">
        <Toolbar>
          <Typography onClick={() => navigate('/')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fur<span className='logo-F'>ni</span>ture
          </Typography>
          <Button onClick={() => navigate('/users/login')} color="inherit">Login</Button>
          <Button onClick={() => navigate('/users/signup')} color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <div className='intro-container'>
        <div className='intro'>
          <h1>Moving out Temporarily?</h1>
          <h1>Check out our Products to Furniture</h1>
        </div>
        <Button
          className='viewProducts'
          variant="contained"
          onClick={() => navigate('/users/signup')}
        >
          View Products
        </Button>
      </div>
    </div>
  );
}
