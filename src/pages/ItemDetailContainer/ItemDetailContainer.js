import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = ({}) => {
const {id} = useParams();
const [detailProduct, setDetailProduct] = useState({})


const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, 'products', id)

    getDoc(querySnapshot)
    .then((res) => {
        setDetailProduct({
            id: res.id, ...res.data()
        })
    })
    .catch((error) => {console.log(error)})

}

    useEffect (() => {
        getProduct()
    }, [])

    return (
    <div>
        <ItemDetail detail={detailProduct}/>
    </div>
  )
}

export default ItemDetailContainer