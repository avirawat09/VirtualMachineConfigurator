import './InstanceImageTitleDescription.css'
import InstanceImageTitle from './InstanceImageTitle';
import InstanceImageDescription from './InstanceImageDescription';


function InstanceImageTitleDescription(props){
    const title = props.title
    const description = props.description
    return (
        <div className='Instance-image-title-description'>
            <InstanceImageTitle title = {title}/>
            <InstanceImageDescription description = {description}/>
        </div>
    );

}

export default InstanceImageTitleDescription;