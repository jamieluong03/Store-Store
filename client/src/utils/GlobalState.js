import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCTS,
  ADD_PRODUCT,
  ADD_TO_CART,
  ADD_ALL_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_PRODUCT:
      console.log('SET CURRENT ACTION', action);
      return {
        ...state,
        currentProduct: action.product,
        loading: false
      };
    
    case REMOVE_PRODUCT:
      return {};

    case UPDATE_PRODUCTS:
      console.log('UPDATE ACTION', action);
      return {
        ...state,
        products: [...action.products],
        loading: false
      };
    
    case ADD_PRODUCT:
      console.log('ADD PRODUCT ACTION', action)
      return {
        ...state,
        products: [action.product, ...state.products],
        loading: false
      };
    
    case ADD_TO_CART:
      console.log('ADD TO CART ACTION', action)
      return {
        ...state,
        cart: [action.product, ...state.cart],
        loading: false
      };

    case ADD_ALL_TO_CART:
      return {};

    case UPDATE_CART:
      return {
        ...state,
        cart: [...state.cart],
        loading: false
      };

    case REMOVE_FROM_CART:
      console.log('REMOVE FROM CART ACTION', action);
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product._id !== action._id;
        })
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    currentProduct: {
      _id: 0,
      title: "",
      body: "",
      author: ""
    },
    cart: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
