import './SectionBodyInstanceImageCard.css';

import InstanceImagePicture from './InstanceImagePicture';
import InstanceImageForm from './InstanceImageForm';
import InstanceImageTitleDescription from './InstanceImageTitleDescription';

function SectionBodyInstanceImageCard(props){
    const detail = props.detail
    return (
        <div className='Section-body-instance-image-card'>
            <InstanceImagePicture/>
            <InstanceImageTitleDescription title = {detail.name} description = {detail.description}/>
            <InstanceImageForm price = {detail.price}/>

        </div>
    );

}

export default SectionBodyInstanceImageCard;