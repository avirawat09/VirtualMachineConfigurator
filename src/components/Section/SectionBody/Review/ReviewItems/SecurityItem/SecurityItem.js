import './SecurityItem.css';
import RuleCard from '../../../Security/NewGroup/RuleCard';
  
import { useContext } from 'react';
import { AppContext } from '../../../../../../context'

const SecurityItem = () =>{
    const { handleSecChange } = useContext(AppContext);

    return(
        <div className='Security-item'>
            <span className='span-title'>Security</span>
            <span className='span-Edit' onClick={(event) => {handleSecChange(3)}}>Edit</span>
            <RuleCard/>
        </div>
    );

}

export default SecurityItem;