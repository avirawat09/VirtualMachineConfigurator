import './Type.css';
import '../StorageCard.css'
import {storageTypeOption} from '../../../../../../data/data'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

const Type = () =>{
    const { cartStorage, handleCartStorage } = useContext(AppContext);
    const handleChange = (event)=>{
        const updatedTypeId = event.target.value;
        const updateObj = {
            typeId : updatedTypeId,
            typeName : storageTypeOption[updatedTypeId-1].name
        };
        handleCartStorage(updateObj)
    };
    
    const value = 'typeId' in cartStorage? cartStorage.typeId : 1;

    return(
        <div className='Type Card-elements'>
            <span>
            <label className='Type-label'>Type</label>
            <select defaultValue={value} className='Type-selector'  onChange={(event) => handleChange(event)}>
                     {storageTypeOption.map((option) => (
                         <option value={option.id}>{option.name}</option>))
                     }
            </select>

            </span>
        </div>
    );

}

export default Type;