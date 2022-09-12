
import './BandwidthItem.css';
import BandwidthItemCard from './BandwidthItemCard';

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

const BandwidthItem = () =>{
    const { handleSecChange } = useContext(AppContext);

    return(
        <div className='Bandwidth-item'>
            <span className='span-title'>Bandwidth</span>
            <span className='span-Edit' onClick={(event) => {handleSecChange(3)}}>Edit</span>
            <BandwidthItemCard/>
        </div>
    );

}

export default BandwidthItem;