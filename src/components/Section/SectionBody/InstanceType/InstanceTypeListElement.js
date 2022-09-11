import './InstanceTypeListElement.css';
import { useContext } from 'react';
import { AppContext } from '../../../../context'


function InstanceTypeListElement(props){
    const { handleInstanceTypeId } = useContext(AppContext);
    const element = props.detail;
    const handleInstanceTypeOnClick = (event) => {
        handleInstanceTypeId(element.id)
    };

    return (
        <button className='Instance-type-list-element' onClick={(event) => handleInstanceTypeOnClick(event)}>
            {element.name}
        </button>
    );


}


export default InstanceTypeListElement;