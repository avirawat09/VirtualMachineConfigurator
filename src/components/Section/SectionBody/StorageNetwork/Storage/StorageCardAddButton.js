import './StorageCardAddButton.css';

import { useContext } from 'react';
import { AppContext } from '../../../../../context'


const StorageCardAddButton = () =>{
    const { cartStorage , handleSecChangeCount} = useContext(AppContext);
    const handleClick = (event) => {
        // alert(Object.keys(cartStorage).map(o=> o + '\n'))
        const objectKeys = Object.keys(cartStorage)
        const completeKeys = ['typeId', 'capacity', 'iops', 'isEncrypted', 'isBackup' ]
        const res  = completeKeys.map((k) =>objectKeys.includes(k))
        if (res.includes(false)){
            alert('Fill complete details')
            return(<></>)
        } 
        handleSecChangeCount(1)
    }
    return(
        <div >
            <button className='Storage-card-add-button' onClick={(event) => handleClick(event)}>Add volume</button>
        </div>
    );

}

export default StorageCardAddButton;