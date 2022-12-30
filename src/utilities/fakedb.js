// use local storage to manage cart data
const addToDb = _id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Total-likes');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[_id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[_id] = newQuantity;
    }
    else {
        shoppingCart[_id] = 1;
    }
    localStorage.setItem('Total-likes', JSON.stringify(shoppingCart));
}
const getStoredCart = () => {
    let shoppingCart = {}
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Total-likes');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
const removeFromDb = _id => {
    const storedCart = localStorage.getItem('Total-likes');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (_id in shoppingCart) {
            delete shoppingCart[_id];
            localStorage.setItem('Total-likes', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('Total-likes');
}

export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
}