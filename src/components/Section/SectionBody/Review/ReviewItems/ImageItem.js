
import './ImageItem.css';

import SectionBodyInstanceImageCard from '../../InstanceImage/InstanceImageCard'

const ImageItem = () =>{
    const instance_image_body = [
        {
            id: 1,
            name: 'Linux 2 image,Ubuntu Server 18.04 LTS',
            description: 'Linux 2 comes with 5 years of support. It provides Linux kernel 4.14 tuned for optimal performance',
            price: 243.61
        },
    ]

    return(
        <div className='Image-item'>
            <span className='span-title'>Image</span>
            <span className='span-Edit'>Edit</span>
            {instance_image_body.map((instance_image)=> <SectionBodyInstanceImageCard detail = {instance_image}/>)}
        
        </div>
    );

}

export default ImageItem;