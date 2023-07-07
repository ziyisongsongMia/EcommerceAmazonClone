export const initialState = {
  basket: [
    {
      id: '12345',
      title: 'The Lean Startup: How Constant Innovation Creates',
      price: 11.96,
      rating: 5,
      image: 'https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg',
    },
  ],
  user: null,
}

export function reducer(state, action) {
  console.log('action', action)
  console.log('state', state)
  switch (action.type) {
    case 'ADD_TO_BASKET':
      //Logic for adding item to basket
      return { ...state, basket: [...state.basket, action.item] }
      break
    case 'REMOVE_FROM_BASKET':
      //Logic for removing item from basket
      return { ...state }
      break
    default:
      return state
  }
} /* action {type: 'ADD_TO_BASKET', item: {…}}item: id: "12345"image: "https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"price: 11.96rating: 5title: "The Lean Startup: How Constant Innovation Creates"[[Prototype]]: Objecttype: "ADD_TO_BASKET"[[Prototype]]: Object
react_devtools_backend_compact.js:2421 state {basket: Array(0), user: null} */
