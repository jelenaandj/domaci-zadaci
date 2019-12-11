import React from 'react';
import Launch from './launch';




//has atribute data wich uses for display 
const LaunchList=(props)=>{
  let {data}=props;
    return (
        <div className='launchlist'>
            {data.map(x=>{return <Launch launch={x} key={x.flight_number} ></Launch>})}
        </div>
    );

}
export default LaunchList;
