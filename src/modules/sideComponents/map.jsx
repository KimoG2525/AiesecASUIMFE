
import React from 'react';

import {GoogleMap ,withScriptjs,withGoogleMap} from 'react-google-maps'


const Map = () => {
    return(
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{lat:30.007414 , lng:31.491318}}
        />


    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
