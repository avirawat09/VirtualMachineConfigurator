import './Source.css'
import '../RuleCard.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'



function Source(){

    const { ruleItem, handleRuleItem } = useContext(AppContext);
    const handleChange =(event)=>{
        const ruleSource = event.target.value
        const obj = {ruleSource : ruleSource}
        handleRuleItem(obj) 
    };
    let value = 'ruleSource' in ruleItem ? ruleItem.ruleSource : '';



    return (
        <div className='Source Card-elements'>
            <span>Source</span>
            <input className='Text-input' type = 'textbox' onChange={(event) => handleChange(event)} defaultValue={value}/>

        </div>
    );

}

export default Source;