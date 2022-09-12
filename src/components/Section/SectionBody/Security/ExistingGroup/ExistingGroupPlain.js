import './ExistingGroupPlain.css'


import { useContext } from 'react';
import { AppContext } from '../../../../../context'


function ExistingGroupPlain() {
    const { ruleList} = useContext(AppContext);
    
    const handleChange =()=>{};
    let value ="SS";
    return (
        <div className='Existing-group-plain'>
            <span>Select Security Group</span>
             <select defaultValue={'Region'} className='Existing-group-selector' value={value} onChange={handleChange}>
                     {ruleList.map((option) => (
                         <option value={option.ruleTypeId}>{option.name}</option>))
                     }
            </select>

        </div>
    );
}

export default ExistingGroupPlain;