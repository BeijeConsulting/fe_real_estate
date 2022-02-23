export default (type, arr) => {

    switch (type) {
        case 'price-asc':
            return arr.sort((a, b) => a.price - b.price)
            
        case 'price-desc':
            return arr.sort((a, b) => b.price - a.price)
        default:
            break
    }


}