import React, { useState, useEffect } from 'react';
import { getRoadster } from '../utility/space-x-service';

const Footer=(props)=>{
    const[footer,setFooter]=useState({})
    let {data}=props;

    useEffect(()=>{
        getRoadster().then(data=>{
            setFooter(data);
        })
    },[])


    return(
        <div className='footer'>
            <hr/>
            <label>Name:{footer.name}</label>
            <br></br>
            <label>Orbit-type:{footer.orbit_type}</label>
            <br></br>
            <label>{footer.details}</label>

        </div>
    )
}
export default Footer