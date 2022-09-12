
import './InstanceItem.css';

import InstanceItemCard from './InstanceItemCard';
import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


const InstanceItem = () =>{
    const { cartInstanceType, handleSecChange } = useContext(AppContext);
    return(
        <div className='Instance-item'>
            <span className='span-title'>Instance</span>
            <span className='span-Edit' onClick={(event) => {handleSecChange(2)}}>Edit</span>
            <InstanceItemCard detail = {cartInstanceType}/>        
        </div>
    );

}

export default InstanceItem;