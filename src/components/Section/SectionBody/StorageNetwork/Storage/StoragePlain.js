
import './StoragePlain.css';
import StorageCardList from './StorageCardList';
import StorageCardAddButton from './StorageCardAddButton';

const StoragePlain = () =>{

    return(
        <div className='Storage-plain'>
            <StorageCardList/>
            <StorageCardAddButton/>
        </div>
    );

}

export default StoragePlain;