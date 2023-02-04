import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';


export function Product({ product, id }) {
  const navigate = useNavigate();
  return (
    <Card className='product-container'>
      <img src={product.poster} alt={product.name} className='product-poster' />
      <CardContent>
        <div className='product-name'>{product.name}</div>
      </CardContent>
      <div className='product-rate-details'>
        <CardActions>
          <Button
            variant="outlined"
            startIcon={<NavigateNextIcon />}
            onClick={() => navigate(`/products/${id}`)}
          >
            View Details
          </Button>
        </CardActions>
        <CardActions>
          <p className='product-rate'><strong>₹ <span>{product.rate}</span> </strong>/month</p>
        </CardActions>
      </div>
    </Card>
  );
}
