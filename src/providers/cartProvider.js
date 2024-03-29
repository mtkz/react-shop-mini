import React, { useReducer, useState } from 'react'
import CartContext from 'src/context/cartContext'

function cartReducer(cart, action) {

    switch (action.type) {
        case 'add':
            // const itemIndex = cart.findIndex(item => item.product.Id === action.product.Id)
            // if (itemIndex < 0) {
            //     return [...cart, action]
            // }
            return [...cart, action]
    }
}

function CartProvider({ children }) {
    const [cart, setCart] = useReducer(cartReducer, [])
    const [total, setTotal] = useState(0)

    React.useEffect(() => {
        setTotal(cart.length)
    })

    return (
        <CartContext.Provider value={{
            cart, setCart, total
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;