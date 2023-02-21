import Item from "../Item/Item"
import { Link } from "react-router-dom"
import './style.css';


const ItemList = ({productList}) => {
  return (
    <div className="ItemList">
      {
        productList.map ((product) => (
          <div key={product.id} className="ItemListProduct">

            <Link to = {`/item/${product.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Item product={product} />
            </Link>
              
          </div>
        ))
      }
    </div>
  )
}

export default ItemList