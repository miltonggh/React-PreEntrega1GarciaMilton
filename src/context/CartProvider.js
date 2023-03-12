import { CartContext } from "./CartContext"
import { useState } from "react";

const CartProvider = ({children}) => {
  const [cart, setCart] = useState ([]);

  const addItem= (item, quantity) => {
    isInCart(item.id)

    if(isInCart(item.id)){
      const newCart = cart.map((product) => {
        if ( product.id === item.id ) {
          product.quantity = product.quantity + quantity
          return product
        } else {
          return product
        }
      })
      setCart(newCart)
    }else {
      const product = {
        id: item.id,
        nombre: item.nombre,
        price: item.price,
        quantity: quantity,
        formaDeMontura: item.formaDeMontura,
        category: item.category,
        img: item.img,
        stock: item.stock,
    }
    setCart ([...cart, product]);
    }

  }

  const clear = () => {
    setCart([])
  }

  const removeItem = (productId) => {
    setCart(cart.filter((product) => product.id !== productId))
  }

  const isInCart = (productId) => {
    if (cart.find((product) => product.id === productId)){
      return true;
    }else{
      return false;
    }
    }
  

  return <CartContext.Provider value= {{cart, addItem, clear, removeItem}}>{children}</CartContext.Provider>
  
};

export default CartProvider