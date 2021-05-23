import camelize from 'camelize';
import {locations} from './location.mock';

//search for the city
export const locationRequest = (searchTerm) =>{
    return new Promise((resolve, reject) =>{
        const locationMock = locations[searchTerm];
        if(!locationMock) {
            reject('not found');
        }
    
    resolve(locationMock)
    });
};

//transfom the lan and lng of the searched city
export const locationTransform = (result) =>{
    const {geometry ={}} = camelize(result.results)[0];
    const {lat, lng} = geometry.location;

    return{lat, lng};
    
}