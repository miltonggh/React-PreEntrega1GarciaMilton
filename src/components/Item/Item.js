import './style.css';

const Item = ({product}) => {
  return (
    <div className='Item'>
        <img alt={product.nombre} src={`/img/${product.img}`}></img>

        <div className='ItemName'>
          <h2>{product.nombre}</h2>
          <h3>${product.price}</h3>
        </div>
        
    </div>
  )
}

export default Item