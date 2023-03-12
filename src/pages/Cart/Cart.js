import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const { cart, clear, removeItem } =  useContext(CartContext)
  const navigate = useNavigate();
  return (
    <div>
        {cart.map((product)=> (
          <div key={product.nombre}>
            <h2>{product.nombre}</h2>
            <h3>{product.quantity}</h3>
            <button onClick={() => removeItem(product.id)}>🗑️</button>
          </div>
        ))}
      {cart.length > 0 && <button onClick={clear}>Vaciar Carrito</button>}
      {cart.length ===0 && <div>
          <h3> No hay productos en el carrito</h3>
          <button onClick={() => navigate('/')}>Seguir comprando</button>
        </div>}

    </div>
   
  )
}

export default Cart