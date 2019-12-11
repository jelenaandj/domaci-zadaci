import React, { useEffect,useState } from 'react';
import { getCompanyInfo } from '../utility/space-x-service';



const CompanyInfo=(props)=>{
    const [info,setInfo]= useState([])
    let{name,founder,founded,ceo}=info;

useEffect(()=>{
    

getCompanyInfo().then(data=>{
  setInfo(data);
})


},[]);

    return(
        <div className='div'>
        <div className='info'>
            <label>{name}</label>
            <br></br>
            <label>Founder: {founder}</label>
            <br></br>
            <label>Founded: {founded}</label>
            <br></br>
            <label>CEO: {ceo}</label>
            <hr />
           

        </div>
        </div>
    );
}
export default CompanyInfo;