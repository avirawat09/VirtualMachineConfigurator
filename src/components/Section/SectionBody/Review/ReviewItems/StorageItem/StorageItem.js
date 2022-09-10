import './StorageItem.css';
import StorageCardList from '../../../StorageNetwork/Storage/StorageCardList';

const StorageItem = () =>{
    return(
        <div className='Storage-item'>
            <span className='span-title'>Storage</span>
            <span className='span-Edit'>Edit</span>
            <StorageCardList/>

        </div>
    );

}

export default StorageItem;