import React, {useState, useEffect} from 'react';
import {locationRequest, locationTransforms} from './location.service';

export const locationContext =React.createContext();
const [location, setLocation] = useState(null);
const [keyword, setKeyword] = useState("san francisco");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

export const locationContextProvider = ({ children }) => {

    const onSearch = (searchKeyword) =>{
        setIsLoading(true);
        setKeyword(searchKeyword)
        locationRequest(searchKeyword).then(locationTransforms).then(result =>{
            setIsLoading(false);
            setLocation(result)
        })
        .catch((err) =>{
            setIsLoading(false);
            setError(err)
        })
    }
    useEffect(() =>{
        onSearch(keyword)
    },[])
    return(
        <locationContext.Provider
        value = {{
            isLoading,
            error,
            location,
            search : onSearch,
            keyword
        }}
        />
        {children}
        </locationContext.Provider>


        
    )
}