
import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS_BASKET } from '../actions/types';

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    Deception: {
      name: "Deception",
      price: 10.99,
      numbers: 0,
      inCart: false
    },
    Disappearance: {
      name: "Disappearance",
      price: 10.99,
      numbers: 0,
      inCart: false
    },
    BadgersDisease: {
      name: "Badger's Disease",
      price: 10.99,
      numbers: 0,
      inCart: false
    },
    TheLostPrincess: {
      name: "The Lost Princess",
      price: 10.99,
      numbers: 0,
      inCart: false
    },
  }
}

export default (state = initialState, action) => {
  switch(action.type){
      case ADD_PRODUCT_TO_BASKET:
        let addQuantity = { ...state.products[action.payload]}

        addQuantity.numbers += 1;
        addQuantity.inCart = true;
        console.log(addQuantity)

        return {
          ...state,
          basketNumbers: state.basketNumbers + 1,
          cartCost: state.products[action.payload].price,
          products: {
            ...state.products,
            [action.payload]: addQuantity
          }
        }
        case GET_NUMBERS_BASKET:
          return {
            ...state
          }
      default:
        return state;
  }
}
