// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Total-likes');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
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
const removeFromDb = id => {
    const storedCart = localStorage.getItem('Total-likes');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
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