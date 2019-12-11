import React from 'react';
import {fillYearsToArray,fillYearsToArrayF} from '../utility/date-utility'

const DataYearFilter=(props)=>{
   let years=fillYearsToArray();
   let {handleChange}=props;

    return(

        <select id="year-filter" onChange={handleChange} >
            {years.map(x=><option value={x}>{x}</option>)}

        </select>
    );
}


const DataFYearFilter=(props)=>{
    let years=fillYearsToArrayF();
    let {handleChange}=props;
 
     return(
 
         <select id="year-filter" onChange={handleChange} >
             {years.map(x=><option value={x}>{x}</option>)}
 
         </select>
     );
 }
export {DataYearFilter,DataFYearFilter};