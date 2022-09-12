import './AddNewGroupButton.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../context'

function AddNewGroupButton(){
    const { ruleItem , handleRuleItem, handleSecChangeCount, handleRuleList} = useContext(AppContext);
    const handleClick = (event) => {
        const objectKeys = Object.keys(ruleItem)
        const completeKeys = ['description', 'ruleSource' ]
        const res  = completeKeys.map((k) =>objectKeys.includes(k))
        if (res.includes(false)){
            alert('Fill complete details')
            return(<></>)
        } 
        handleRuleList({...ruleItem})
        handleRuleItem({})
        handleSecChangeCount(1)
    }


    return (
        <div>
            <button className='Add-new-group-button' onClick={(event) => handleClick(event)}>Add Rule</button>
        </div>
    );

}

export default AddNewGroupButton;