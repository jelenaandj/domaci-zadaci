import React from 'react';
import getSerbianDate from '../utility/date-utility.js';


//has atribute launch (podaci o lansiranju) whisch has info about launc
const Launch=(props)=>{
    let {launch}=props;
    let {mission_name:m_name, 
        launch_year:l_year, 
        launch_date_unix:l_date, 
        rocket:{rocket_name:r_name},
        links:{mission_patch:m_patch}}= launch;

    let date=new Date(l_date*1000);

    return (

        <div className='launch'>
            <label>{m_name}</label>
            <img src={m_patch===null?'https://png.pngtree.com/png-clipart/20190613/original/pngtree-rocket-icon-png-image_3565883.jpg':m_patch} className={'mission_logo'}></img>
            <label>{getSerbianDate(date)}</label>
            <label>{r_name}</label>

        </div>
    );

}
export default Launch;