import './StorageItem.css';
import StorageCardList from '../../../StorageNetwork/Storage/StorageCardList';
import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


const StorageItem = () =>{
    const { handleSecChange } = useContext(AppContext);

    return(
        <div className='Storage-item'>
            <span className='span-title'>Storage</span>
            <span className='span-Edit' onClick={(event) => {handleSecChange(3)}}>Edit</span>
            <StorageCardList/>

        </div>
    );

}

export default StorageItem;