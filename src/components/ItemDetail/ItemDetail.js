import './style.css';
import ItemCount from "../../components/ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const {addItem, cart} = useContext(CartContext);
  const [itemCount, setItemCount] = useState (detail?.stock === 0 ? 0 : 1);

  return (
    <div className="ItemDetail">
        <img alt={detail.nombre} src= {`/img/${detail.img}`}></img>

        <div className="ItemDetailkart">
          <h2>{detail.nombre}</h2>
          <h3 style={{ textTransform: 'uppercase' }}>Color: {detail.color}</h3>

          <ItemCount itemCount={itemCount} setItemCount={setItemCount}/>


          <Button onClick={() => navigate('/')}>Seguir Comprando</Button>
          <Button disabled={itemCount > detail.stock} onClick={() => addItem(detail, itemCount)}>Agregar al carrito</Button>
          <Button onClick={() => navigate('/cart')}>Ir al Carrito</Button>

        </div>
       
    </div>
  )
}

export default ItemDetail