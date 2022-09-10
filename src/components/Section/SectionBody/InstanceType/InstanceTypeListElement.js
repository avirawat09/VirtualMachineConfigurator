import './InstanceTypeListElement.css';

function InstanceTypeListElement(props){
    const element = props.detail;
    return (
        <button className='Instance-type-list-element'>
            {element.name}
        </button>
    );


}


export default InstanceTypeListElement;