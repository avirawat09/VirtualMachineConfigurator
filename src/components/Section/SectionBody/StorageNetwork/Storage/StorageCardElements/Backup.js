import './Backup.css';
import '../StorageCard.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

const Backup = () =>{
    const { cartStorage, handleCartStorage } = useContext(AppContext);

    const handleCheckboxBlur = (event) => {
        const updatedIsBackup = event.target.checked;
        const updatedObj = { isBackup : updatedIsBackup };
        handleCartStorage(updatedObj) 
    };
    const value = 'isBackup' in cartStorage? cartStorage.isBackup : false;
    return(
        <div className='Backup Card-elements'>
            <span><label>Backup</label></span>
            <div><input type="checkbox" onBlur={(event) => handleCheckboxBlur(event)} defaultChecked={value}/></div>         
        </div>
    );

}

export default Backup;