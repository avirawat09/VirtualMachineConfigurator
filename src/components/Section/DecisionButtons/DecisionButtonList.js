import './DecisionButtonList.css';
import DecisionButtons from './DecisionButtons'
import { useContext } from 'react';
import { AppContext } from '../../../context'


function DecisionButtonList(){
    const button_list = {
        'process': [
            { id: 1, name : "Proceed"},          
            { id: 2, name : "Back"},
        ],
        'launch': [
            { id: 3, name : "Launch"},       
            { id: 2, name : "Back"},             
            { id: 1, name : "Cancel"},
        ],
        'blank': []
    }

    let page_category = 'blank';
    const {secId  } = useContext(AppContext);
    if ([2,3,4].includes(secId)){
        page_category = 'process';
    }
    if (secId === 5){
        page_category = 'launch';
    }
    
    return (
        <div className='Decision-button-list'>
            {button_list[page_category].map((buttons) => <DecisionButtons name={buttons.name}/> )}
        </div>
    );
}

export default DecisionButtonList;