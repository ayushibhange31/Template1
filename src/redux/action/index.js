// for Add Item to Cart
export const addCart = (product) =>{
    return{
        type: "ADDITEM",
        payload: product
    }
}

//For Delete Item from Cart

export const delItem = (product) =>{
    return{
        type: "DELITEM",
        payload: product
    }
}

