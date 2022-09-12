import './Iops.css';
import '../StorageCard.css'


import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

const Iops = () =>{
    const { cartStorage } = useContext(AppContext);
    const iopsValue = 'iops' in cartStorage? cartStorage.iops: 100;  
    return(
        <div className='Iops Card-elements'>
            <span><label>Iops</label></span>
            <div><span>{iopsValue}</span></div>
        </div>
    );

}

export default Iops;