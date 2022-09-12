
import './ImageItemCard.css';

import InstanceImagePicture from '../../../InstanceImage/InstanceImagePicture';
import InstanceImageTitleDescription from '../../../InstanceImage/InstanceImageTitleDescription';

import ImageItemForm from './ImageItemForm';


const ImageItemCard = (props) =>{
    const imageDetail = props.detail;


    return(
        <div className='Image-item-card'>
            <InstanceImagePicture/>
            <InstanceImageTitleDescription title = {imageDetail.name} description = {imageDetail.description}/>
            <ImageItemForm architecture = {imageDetail.architecture}/>

        </div>
    );

}

export default ImageItemCard;