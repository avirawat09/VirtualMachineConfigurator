import './Description.css'
import '../RuleCard.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


function Description(){

    const { ruleItem, handleRuleItem } = useContext(AppContext);
    const handleChange =(event)=>{
        const description = event.target.value
        const obj = {description : description}
        handleRuleItem(obj) 
    };
    let value = 'description' in ruleItem ? ruleItem.description : '';


    return (
        <div className='Description Card-elements'>
            <span>Description</span>
            <input className='Text-input' type = 'textbox' onChange={(event) => handleChange(event)} defaultValue={value}/>

        </div>
    );

}

export default Description;