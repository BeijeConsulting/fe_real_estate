import { javaAcademyServiceInstance as client }  from "../javaAcademyService";


const findAds = async ( filters ) => {

    let obj ={
        advType: "SALE",
        city: "Firenze",
        buildingType: "HOUSE"
    }

    await client.get('/find', obj )
    .then(res => {
        console.log(res)
    })

}

export {
    findAds
}