export default  (rooms) => {
    


    switch (rooms) {
        case 1:
            return "Monolocale"
        case 2:
            return "Bilocale"
        case 3:
            return "Trilocale"
        case 4:
            return "Quadrilocale"
        case 5:
            return "Casa"
        default:
            return "Edificio"
    }
}