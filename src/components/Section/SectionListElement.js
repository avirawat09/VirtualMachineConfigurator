import './SectionListElement.css';
import {AppContext} from '../../context'
import { useContext } from 'react';


function SectionListElement(props){
    const element = props.detail;
    const {handleSecChange  } = useContext(AppContext);
    return (
        <button 
        className='Section-list-element'
        onClick={()=> handleSecChange(element.id)}
        >
            {element.id}. {element.name}
        </button>
    );


}


export default SectionListElement;