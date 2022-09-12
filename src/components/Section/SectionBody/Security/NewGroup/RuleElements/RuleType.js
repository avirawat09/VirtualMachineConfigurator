import './RuleType.css'
import '../RuleCard.css'
import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

import {ruleTypeOptions} from '../../../../../../data/data'
function RuleType(){
    const { handleRuleItem } = useContext(AppContext);

    const handleChange =(event)=>{
        const ruleTypeId = event.target.value
        const portRange = ruleTypeId == 3 ? 25 : ruleTypeId == 2 ? 22 : 443;
        const obj = {ruleTypeId : ruleTypeId, portRange: portRange}
        handleRuleItem(obj) 
    };
    let value = 1;

    return (
        <div className='RuleType Card-elements'>
            <span> Type</span>            
            <select className='Type-selector' defaultValue={value} onChange={(event) => handleChange(event)}>
                     {ruleTypeOptions.map((option) => (
                         <option value={option.id}>{option.name}</option>))
                     }
            </select>

        </div>
    );

}

export default RuleType;