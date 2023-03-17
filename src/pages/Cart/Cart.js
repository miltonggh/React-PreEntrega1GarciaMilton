import './style.css';
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc} from "firebase/firestore";
import { Button } from 'react-bootstrap';


const Cart = () => {
  const { cart, clear, removeItem } =  useContext(CartContext)
  const [formValue, setFormValue] = useState ({
    name: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();


  const createOrder = (event) => {
    event.preventDefault()
    const db = getFirestore();


    const querySnapshot = collection(db, 'orders')
   
    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
      },
       products: cart.map((product) => {
        return {
          nombre: product.nombre,
          price: product.price,
          id: product.id,
          quantity: product.quantity
        }
       }),
       total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
    })
    .then((response) => {
      alert('la orden fue creada')
      updateStocks(db)

    })
    .catch ((error) => console.log(error))
  };

  const updateStocks = (db) => {
    cart.forEach ((product) => {
      const querySnapshot = doc(db, 'products', product.id)

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {})
      .catch((error) => console.log(error))
    })
  }

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
    [event.target.name]: event.target.value})
  }
  return (
    <div className='Cart'>
      <div className='itemCart'>
        {cart.map((product)=> (
            <div key={product.nombre}>
              <img alt={product.img} src= {`/img/${product.img}`}></img>
              <h2>Nombre:{product.nombre}</h2>
              <h3>Cantidad:{product.quantity}</h3>
              <h3>Precio ${product.price * product.quantity}</h3>
              
              <button onClick={() => removeItem(product.id)}>🗑️</button>
            </div>
          ))}
      </div>

      <div>
        {cart.length > 0 && <Button onClick={clear}>Vaciar Carrito</Button>}
        {cart.length > 0 && <div>
            <Button onClick={() => navigate('/')}>Seguir comprando</Button>

          </div>}
        {cart.length === 0 && <h3> No hay productos en el carrito</h3>}
        {cart.length > 0 && <h3>Total:${cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}</h3>}
      </div>

      <div>
          <form> 
            <input name= 'name' type='text' placeholder="nombre" value= {formValue.name} onChange={handleInput}/>
            <input name= 'phone' type='text' placeholder="telefono" value= {formValue.phone} onChange={handleInput}/>
            <input name= 'email' type='text' placeholder="email" value= {formValue.email} onChange={handleInput}/>
            <button onClick={createOrder}>Finalizar compra</button>

          </form>
      </div>
      
      
    </div>
   
  )
}

export default Cart