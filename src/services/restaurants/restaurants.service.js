//Connecting our app with the data services

import {mocks} from './mock';
import camelize from 'camelize';
export const restaurantRequest = (location="37.7749295,-122.4194155") =>{
    return new Promise((resolve, reject) =>{
        const mock= mocks[location];
        if(!mock){
            reject('no mocks')
        }
        resolve(mock)
    })
}
//camelize json to prevent data misflow
export const restaurantTransform = ({results = []}) =>{
    //map will itirate over every restaurant
    const mappedResults = results.map((restaurant) =>{
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hourse &&  restaurant.opening_hourse.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY"
        }

    })

    return camelize(mappedResults)
}


// //.then is applied when we are expecting something in the future. promise .then
// restaurantRequest()
// .then(restaurantTrannsform)
// .then((transformedResponse) =>{
//     console.log(transformedResponse)
// })
// .catch((error) =>{
//     console.log(error)
// })