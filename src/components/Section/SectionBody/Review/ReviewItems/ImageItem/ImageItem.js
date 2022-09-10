
import './ImageItem.css';
import ImageItemCard from './ImageItemCard';

const ImageItem = () =>{

    return(
        <div className='Image-item'>
            <span className='span-title'>Image</span>
            <span className='span-Edit'>Edit</span>
            <ImageItemCard/>        
        </div>
    );

}

export default ImageItem;