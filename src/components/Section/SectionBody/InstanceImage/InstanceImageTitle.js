import './InstanceImageTitle.css'


function InstanceImageTitle(props){
    const title = props.title
    return (
        <div className='Instance-image-title'>
            {title}
        </div>
    );

}

export default InstanceImageTitle;