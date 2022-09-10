
import './InstanceItem.css';

import InstanceItemCard from './InstanceItemCard';
const InstanceItem = () =>{

    return(
        <div className='Instance-item'>
            <span className='span-title'>Instance</span>
            <span className='span-Edit'>Edit</span>
            <InstanceItemCard/>        
        </div>
    );

}

export default InstanceItem;