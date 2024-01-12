// handleCart.jsx
const initialState = [];

const handleCart = (state = initialState, action) => {
    
  const product = action.payload;
  const index = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id && index.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id && x.id === index.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, ...index, qty: 1 }];
      }
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id && x.id===index.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id && x.id===index.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};

export default handleCart;