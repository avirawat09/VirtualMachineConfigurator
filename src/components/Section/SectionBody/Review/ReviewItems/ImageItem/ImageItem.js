
import './ImageItem.css';
import ImageItemCard from './ImageItemCard';

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

const ImageItem = () =>{
    const { cartImage, handleSecChange } = useContext(AppContext);

    return(
        <div className='Image-item'>
            <span className='span-title'>Image</span>
            <span className='span-Edit' onClick={(event) =>handleSecChange(1)}>Edit</span>
            <ImageItemCard detail = {cartImage}/>        
        </div>
    );

}

export default ImageItem;