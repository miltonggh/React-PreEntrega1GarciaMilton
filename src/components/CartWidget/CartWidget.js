import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {cart} =useContext(CartContext);
  const [total, setTotal] = useState (0)

useEffect(()=> {
  setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
}, [cart])
  return (
    <Link to= {'/cart'}>
        <div className='CarWidget'>
          <span>{total}</span>
          <span>🛒</span>
        </div>
    </Link>

  )
}

export default CartWidget