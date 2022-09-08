import './InstanceImageDescription.css'


function InstanceImageDescription(props){
    const description = props.description
    return (
        <div className='Instance-image-description'>
            {description}
        </div>
    );

}

export default InstanceImageDescription;