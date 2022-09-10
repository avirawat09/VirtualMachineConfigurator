import './InstanceImageCard.css';

import InstanceImagePicture from './InstanceImagePicture';
import InstanceImageForm from './InstanceImageForm';
import InstanceImageTitleDescription from './InstanceImageTitleDescription';

function InstanceImageCard(props){
    const detail = props.detail
    return (
        <div className='Instance-image-card'>
            <InstanceImagePicture/>
            <InstanceImageTitleDescription title = {detail.name} description = {detail.description}/>
            <InstanceImageForm price = {detail.price}/>

        </div>
    );

}

export default InstanceImageCard;