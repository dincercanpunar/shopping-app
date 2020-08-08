import * as _ from 'lodash';

const INITIAL_STATE = {
    price: 0,
    cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            
            var index = _.findIndex(state.cart, function(o) { return o.id == action.payload.id });
            var nCart = []
            var price = 0

            if(index > -1) {
                nCart = state.cart
                nCart[index].quantity += 1

                price = calculatePrice(nCart)
            } else {
                nCart = [...state.cart, action.payload]

                price = calculatePrice(nCart)
            }

            return {
                ...state,
                price: price,
                cart: nCart
            }

        case 'DELETE_FROM_CART':
        
            var indexx = _.findIndex(state.cart, function(o) { return o.id == action.payload });
            var nCart = state.cart

            nCart.splice(indexx, 1);

            var price = calculatePrice(nCart)


            console.log("NCART", nCart)

            return {
                ...state,
                price: price,
                cart: nCart
            }

        default: return state;
    }
}

const calculatePrice = (cart) => {
    var totalPrice = 0;

    cart.map((item) => {
        totalPrice += item.price * item.quantity
    })

    return totalPrice;
}
