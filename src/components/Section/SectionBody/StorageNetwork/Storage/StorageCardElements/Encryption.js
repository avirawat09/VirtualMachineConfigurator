import './Encryption.css';
import '../StorageCard.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


const Encryption = () =>{
    const { cartStorage, handleCartStorage } = useContext(AppContext);

    const handleCheckboxBlur = (event) => {
        const updatedIsEncrypted = event.target.checked;
        const updatedObj = { isEncrypted : updatedIsEncrypted };
        handleCartStorage(updatedObj)
    }
    const value = 'isEncrypted' in cartStorage? cartStorage.isEncrypted: false;
    return(
        <div className='Encryption Card-elements'>
            <span><label>Encryption</label></span>
            <div><input type="checkbox" onBlur={(event) => handleCheckboxBlur(event)}  defaultChecked={value} /></div>
        </div>
    );

}

export default Encryption;