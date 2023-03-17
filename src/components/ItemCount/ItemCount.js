import './style.css';

const ItemCount = ({itemCount, setItemCount}) => {
  

    const addCounter = () => {
        setItemCount(itemCount + 1)
    }

    const subtractCounter = () => {
        setItemCount(itemCount != 0 ? itemCount - 1 : itemCount)
    }
    
    return (
    <div className="ItemCount">
        <div className="ControlItemCount">
            <button disabled ={itemCount === 0} onClick={addCounter}>+</button>
            <div>
               <span>{itemCount}</span> 
            </div>
            <button disabled ={itemCount === 1} onClick={subtractCounter}>-</button>
        </div>
    </div>
  )

}


export default ItemCount