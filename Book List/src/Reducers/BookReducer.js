export const bookReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title, 
        author: action.book.author, 
        id: `${Math.random()}_${new Date().getTime()}`}
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => {return book.id !== action.id})
    default:
      return state
  }
}