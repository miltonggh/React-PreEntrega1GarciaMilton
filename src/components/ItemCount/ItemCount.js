import { useState, useEffect } from "react"
import './style.css';

const stock = 10

const ItemCount = () => {
    const [itemCount, setItemCount] = useState (0);
  



    const addCounter = () => {
        setItemCount(stock === itemCount ? itemCount : itemCount + 1)
    }

    const subtractCounter = () => {
        setItemCount(itemCount != 0 ? itemCount - 1 : itemCount)
    }
    
    return (
    <div className="ItemCount">
        <div className="ControlItemCount">
            <button onClick={addCounter}>+</button>
            <h2>{itemCount}</h2>
            <button onClick={subtractCounter}>-</button>
        </div>
        <div className="AddCartItemCount">
            <button>Agregar al carrito</button>
        </div>
    </div>
  )

}


export default ItemCount