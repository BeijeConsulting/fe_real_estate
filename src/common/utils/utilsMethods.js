const utilsMethods = {
    ModdingData: (date) => {
        let arr = date.split("-")
        let year = `-${arr[0]}`
        let month = `-${arr[1]}`
        let smallTime = arr[2].split("T")
        let day = smallTime[0]
        return day + month + year
    }
}

export default utilsMethods