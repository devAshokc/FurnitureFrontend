import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { API } from "./global"


export function PriceDetails() {
  const { id } = useParams();
  // const product = productList[id];

  const [product, setProduct] = useState({})

  useEffect(() => {
    fetch(`${API}/products/${id}`)
      .then((data) => data.json())
      .then((pd) => setProduct(pd))
  }, [id])

  const styles = {
    color: "green",
    textDecoration: "underline"
  };
  const [incrementMonth, setIncrementMonth] = useState(1);
  const navigate = useNavigate();

  let totalPrice = incrementMonth * product.rate;

  return (
    <div className='final-price-box'>
      <p style={styles}>In Stock</p>
      <div className='final-price-details'>
        <p>Select Total Months : </p>
        <div>
          <IconButton
            onClick={() => { incrementMonth === 1 ? setIncrementMonth(incrementMonth) : setIncrementMonth(incrementMonth - 1); }}
            aria-label="RemoveMonth"
          >
            <RemoveIcon />
          </IconButton>
          <span className='totalMonthsBox'>{incrementMonth}</span>
          <IconButton
            onClick={() => setIncrementMonth(incrementMonth + 1)}
            aria-label="AddMonth"
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <p>
          <strong>Total</strong> - <span className='product-rate'>
            <strong>₹ <span>{totalPrice}</span></strong>.00</span>
        </p>
      </div>
      <div className='rent-now'>
        <Button
          className='rent-now-button'
          variant="contained"
          onClick={() => navigate(`/products/${id}/${totalPrice}`)}
        >
          RENT NOW
        </Button>
      </div>
    </div>
  );
}
