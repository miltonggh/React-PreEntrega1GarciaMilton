import './style.css';

const stock = 10

const ItemCount = ({itemCount, setItemCount}) => {
  



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
            <div>
               <span>{itemCount}</span> 
            </div>
            <button onClick={subtractCounter}>-</button>
        </div>
        <div className="AddCartItemCount">
            <button>Agregar al carrito</button>
        </div>

    </div>
  )

}


export default ItemCount