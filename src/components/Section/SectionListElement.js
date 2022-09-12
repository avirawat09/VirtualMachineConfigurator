import './SectionListElement.css';
import {AppContext} from '../../context'
import { useContext } from 'react';


function SectionListElement(props){
    const element = props.detail;
    const {handleSecChange  ,secId} = useContext(AppContext);
    const classname = secId == element.id ?  'Section-list-element' + ' Focus'  : 'Section-list-element';
    return (
        <button 
        className={classname}
        onClick={()=> handleSecChange(element.id)}
        >
            {element.id}. {element.name}
        </button>
    );


}


export default SectionListElement;