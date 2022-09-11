import './DecisionButtons.css'
import { useContext } from 'react';
import { AppContext } from '../../../context'


function DecisionButtons(props){

    const name = props.name;
    
    const { secId, handleSecChange, handleSecChangeCount, cartInstanceType, cartStorage, cartNetwork } = useContext(AppContext);
    
    const clickHandler = () => {
        if (name === "Proceed") {
            // proceed only if items has been selected in this section
            if (secId == 2){
                'cpuName' in cartInstanceType && 'memoryName' in cartInstanceType && 'name' in cartInstanceType ?
                     handleSecChangeCount(1) :
                     alert('No value Selected. Please select proper value again !')
            }
            else if (secId == 3){

            }
        }
        else if (name === "Back") {
            handleSecChangeCount(-1);            
        }
        else if (name === "Launch") {
            // TODO: Add launch pop up here
            alert('Launching')
        }
        else if (name === "Cancel") {
            // TODO: Add a cancel pop up here
            handleSecChange(1);
        }

    }
    
    let class_name = 'Decision-buttons ' + name
    return (
        <button className={class_name} 
        onClick = {() => clickHandler() }>
            <span>{name}</span>
        </button>
    );
}

export default DecisionButtons;