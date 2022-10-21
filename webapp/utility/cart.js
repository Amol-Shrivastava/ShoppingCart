sap.ui.define(['sap/m/MessageToast'], function(MessageToast) {
    return{
        addToCart:  function(product, cartArr, cartModel) {
            if(!cartArr.find(el => el === product)){
                cartArr.push(product);   
                cartModel.setProperty('/cartItems', cartArr);
                return Promise.resolve(`${product.name} is added to Cart Successfully`);
            }else{
                return Promise.reject('Product already present in cart.');
            }
        }

    }
})
