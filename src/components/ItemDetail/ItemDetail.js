import './style.css';
import ItemCount from "../../components/ItemCount/ItemCount";


const ItemDetail = ({detail}) => {
  return (
    <div className="ItemDetail">
        <img alt={detail.nombre} src= {detail.img}></img>

        <div className="ItemDetailkart">
          <h2>{detail.nombre}</h2>
          <h3 style={{ textTransform: 'uppercase' }}>Color: {detail.color}</h3>

          <ItemCount/>
        </div>
       
    </div>
  )
}

export default ItemDetail