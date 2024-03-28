const getStoredWishlist = () =>{
    const storedWishlist = localStorage.getItem('wish-list')
    if(storedWishlist){
        return JSON.parse(storedWishlist)
    }
    return [];
}

const saveWishlist = bookId =>{
    const storedWishlists = getStoredWishlist()
    const exists = storedWishlists.find(Id => Id === bookId)
    if(!exists){
        storedWishlists.push(bookId)
        localStorage.setItem('wish-list', JSON.stringify(storedWishlists))
    }

}
export {saveWishlist, getStoredWishlist};