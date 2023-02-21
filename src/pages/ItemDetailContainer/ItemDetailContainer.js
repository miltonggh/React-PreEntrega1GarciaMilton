import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { products } from "../../data/products";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


const ItemDetailContainer = ({}) => {
const {id} = useParams();
const [detailProduct, setDetailProduct] = useState({})
const getProducts = new Promise((resolve, reject) => {
    setTimeout (() => {
        const findProducts = products.find (prod => prod.id == parseInt(id));
        resolve (findProducts)
    }, 1000)
})

    useEffect (() => {
        getProducts
        .then((response) => {
            setDetailProduct(response)
        })
        .catch((error) => {

        })
    }, [])

    return (
    <div>
        <ItemDetail detail={detailProduct}/>
    </div>
  )
}

export default ItemDetailContainer