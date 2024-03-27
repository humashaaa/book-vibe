const getStoredBooklist = () =>{
    const storedBooklist = localStorage.getItem('book-list')
    if(storedBooklist){
        return JSON.parse(storedBooklist)
    }
    return [];
}

const saveBooklist = bookId =>{
    const storedBooklists = getStoredBooklist()
    const exists = storedBooklists.find(Id => Id === bookId)
    if(!exists){
        storedBooklists.push(bookId)
        localStorage.setItem('book-list', JSON.stringify(storedBooklists))
    }

}
export {saveBooklist, getStoredBooklist};