
import { ADD_PRODUCT_TO_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY } from '../actions/types';

const initialState = {
  basketNumbers: 0,
  cartCost: 0,
  products: {
    Deception: {
      name: "Deception",
      tagName: 'deception',
      price: 3.99,
      numbers: 0,
      inCart: false
    },
    Disappearance: {
      name: "Disappearance",
      tagName: 'disappearance',
      price: 3.99,
      numbers: 0,
      inCart: false
    },
    BadgersDisease: {
      name: "Badger's Disease",
      tagName: 'badgersDisease',
      price: 3.99,
      numbers: 0,
      inCart: false
    },
    TheLostPrincess: {
      name: "The Lost Princess",
      tagName: 'lostPrincess',
      price: 3.99,
      numbers: 0,
      inCart: false
    },
  }
}

export default (state = initialState, action) => {
  let productSelected = "";
  switch(action.type){
      case ADD_PRODUCT_TO_BASKET:
        productSelected = { ...state.products[action.payload]}

        productSelected.numbers += 1;
        productSelected.inCart = true;
        console.log(productSelected);

        return {
          ...state,
          basketNumbers: state.basketNumbers + 1,
          cartCost: state.cartCost + state.products[action.payload].price,
          products: {
            ...state.products,
            [action.payload]: productSelected
          }
        }
        case GET_NUMBERS_BASKET:
          return {
            ...state
          }
        case INCREASE_QUANTITY:
          productSelected = { ...state.products[action.payload]}
          productSelected.numbers += 1;
          return {
            ...state,
            cartCost: state.cartCost + state.products[action.payload],
            products: {
              ...state.products,
              [action.payload]: productSelected
            }
          }
        case DECREASE_QUANTITY:
        productSelected = { ...state.products[action.payload]};

        if (productSelected.numbers === 0) {
          productSelected.numbers = 0;
        } else {
          productSelected.numbers -=1;
        }
        productSelected.numbers -= 1;
        return {
          ...state,
          cartCost: state.cartCost - state.products[action.payload],
          products: {
            ...state.products,
            [action.payload]: productSelected
          }
        }
      default:
        return state;
  }
}
