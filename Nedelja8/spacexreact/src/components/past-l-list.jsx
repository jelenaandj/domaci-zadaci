import React, { useState, useEffect } from 'react';
import {getPastLaunches} from '../utility/space-x-service'


import LaunchList from './launch-list';
import { DataYearFilter } from './data-year-filter';


const PastLList=(props)=>{
    // let {data}=props;
    //let data=props.data
    const [data, setData]=useState([]);
    
    const [displayData, setDisplayData]= useState(data);

    useEffect(()=>{
        
  getPastLaunches().then(data=>{
    setData(data);
    setDisplayData(data);
  })
    },[])
   
    const handleChange=(e)=>{
        setDisplayData(data.filter(x=>x.launch_year==e.target.value));
    }

    return(
        <>
        <DataYearFilter handleChange={handleChange} ></DataYearFilter>
        <LaunchList data={displayData}></LaunchList>
        </> 
        );
}
export default PastLList;