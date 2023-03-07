import React from 'react'
// import { UserAuth } from './ContextApi/AuthContext';
// import { useCartContext } from './ContextApi/CartContext';
import StripeCheckout from 'react-stripe-checkout'
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Stripecheckout({totalprice}) {

    let navigate = useNavigate()

   function tokenHandler(token){
    
    if(token){
        toast.success('Payment Done & Your Order is Placed', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        })
                        setTimeout(() => {
                        navigate("/order-success")
                        }, 5000)
    }
      }

  return <>
  
   <StripeCheckout amount={totalprice * 100} shippingAddress token={tokenHandler} currency="INR" billingAddress
   stripeKey='pk_test_51Mi28DSIE1Fy4SgVPkYomum113UqzqonHVSe5TQpr06vzgemVZ4Uy8DrcqrVdU0943RKuSbaeoITtXyGK2fYlb3s00OCAa4zJp'
   >

   <Button variant="contained" sx={{color:"white",padding:"7px 15px",margin:"8px 0px 8px 0px",width:"100%"}}>Make Payment</Button>
   <h4 style={{fontSize:"14px",lineHeight:"22px"}}>Card Number : 4242 2424 4242 4242 & MM/YY : 12/23 & CVC : 567.</h4>
   </StripeCheckout>

  </>
}

export default Stripecheckout