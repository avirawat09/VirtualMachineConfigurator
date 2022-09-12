import './NewGroupName.css'
import { useContext } from 'react';
import { AppContext } from '../../../../../context'

const NewGroupName =() => {
    const { ruleItem, handleRuleItem  } = useContext(AppContext);
    const handleClick = (event) => {
        handleRuleItem({...ruleItem, ...{name: event.target.value }});
    }
    return (
        <div className='New-group-name'>
            <span>New Security Group</span>
            <input  type="textbox" placeholder="New Security Group Name" onBlur={(event)=>handleClick(event)}/>

        </div>
    );
}

export default NewGroupName;

