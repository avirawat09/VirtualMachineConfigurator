
import './ImageItemCard.css';

import InstanceImagePicture from '../../../InstanceImage/InstanceImagePicture';
import InstanceImageTitleDescription from '../../../InstanceImage/InstanceImageTitleDescription';

import ImageItemForm from './ImageItemForm';


const ImageItemCard = () =>{
    const instance_image_body = {
            id: 1,
            name: 'Linux 2 image,Ubuntu Server 18.04 LTS',
            description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
            price: 243.61,
            architecture: "64-bit (x86)"
        }

    return(
        <div className='Image-item-card'>
            <InstanceImagePicture/>
            <InstanceImageTitleDescription title = {instance_image_body.name} description = {instance_image_body.description}/>
            <ImageItemForm architecture = {instance_image_body.architecture}/>

        </div>
    );

}

export default ImageItemCard;