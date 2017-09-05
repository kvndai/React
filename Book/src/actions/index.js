export function selectBook(book) {
  // selectBook is an action creator and needs to return and action -
  // an object with a type value
  console.log('selectBook action', book.title)
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  }
}



