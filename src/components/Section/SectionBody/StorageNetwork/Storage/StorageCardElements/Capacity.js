import './Capacity.css';
import '../StorageCard.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


const Capacity = () =>{
    const { cartStorage, handleCartStorage } = useContext(AppContext);

    const handleTextChange = (event) => {
        const updatedCapacity = parseInt(event.target.value);
        let storageType = 'typeId' in cartStorage? cartStorage.typeId : 0;
        storageType  = parseInt(storageType )
        if (storageType == 0){ alert('Select storage type first') ; return(<></>); }
        if (storageType == 1 && (updatedCapacity < 40 || updatedCapacity > 2000)) { alert('Capacity has to be between 40GB - 2TB') ; return(<></>); }
        if (storageType == 2 && (updatedCapacity < 20 || updatedCapacity > 512)) { alert('Capacity has to be between 20GB - 512GB') ; return(<></>); }

        const updatedIops = updatedCapacity > 500 ? 1000 : updatedCapacity >= 100 ? 600 :100 ; 
        const updatedObj = {capacity : updatedCapacity, iops: updatedIops}
        handleCartStorage(updatedObj)
    }
    const value = 'capacity' in cartStorage ? cartStorage.capacity : 0;
    return(
        <div className='Capacity Card-elements'>
            <span><label>Capacity (GB)</label></span>
            <input type = 'text' onBlur={(event) => handleTextChange(event)} defaultValue = {value}/>
        </div>
    );

}

export default Capacity;