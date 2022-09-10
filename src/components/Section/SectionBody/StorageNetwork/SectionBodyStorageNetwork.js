import './SectionBodyStorageNetwork.css';
import StoragePlain from './Storage/StoragePlain';
import NetworkPlain from './Network/NetworkPlain';
const SectionBodyStorageNetwork = () =>{

    return(
        <div className='Section-body-storage-network'>
            <StoragePlain/>
            <NetworkPlain/>
        </div>
    );

}

export default SectionBodyStorageNetwork;