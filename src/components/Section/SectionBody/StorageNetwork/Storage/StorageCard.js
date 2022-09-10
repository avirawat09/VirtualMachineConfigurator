import './StorageCard.css';

import Type from './StorageCardElements/Type'
import Volume from './StorageCardElements/Volume'
import Capacity from './StorageCardElements/Capacity';
import Encryption from './StorageCardElements/Encryption';
import Iops from './StorageCardElements/Iops';
import Backup from './StorageCardElements/Backup';
import Remarks from './StorageCardElements/Remarks';

const StorageCard = () =>{

    return(
        <div className='Storage-card'>
            <Type/>
            <Volume/>
            <Capacity/>
            <Encryption/>
            <Iops/>
            <Backup/>
            <Remarks/>
        </div>
    );

}

export default StorageCard;