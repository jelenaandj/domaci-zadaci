import React, { useState, useEffect } from 'react';
import {getUpcomingLaunches} from '../utility/space-x-service'
import LaunchList from './launch-list';
import { DataYearFilter,DataFYearFilter } from './data-year-filter';



const UpcomingLList=(props)=>{
    // let {data}=props;
    const [data, setData]=useState([]);

    const [displayData, setDisplayData]= useState(data);

    useEffect(()=>{
        
getUpcomingLaunches().then(data=>{
    setData(data);
    setDisplayData(data);
})
    },[])

    const handleChange=(e)=>{
        setDisplayData(data.filter(x=>x.launch_year==e.target.value));
    }
    return(
        <>
        <DataFYearFilter handleChange={handleChange} ></DataFYearFilter>
        <LaunchList data={displayData}></LaunchList>
        </> 
        );
}
export default UpcomingLList;
