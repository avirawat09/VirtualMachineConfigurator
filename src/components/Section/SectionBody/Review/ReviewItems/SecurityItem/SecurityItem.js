import './SecurityItem.css';
import RuleCard from '../../../Security/NewGroup/RuleCard';
    
const SecurityItem = () =>{
    return(
        <div className='Security-item'>
            <span className='span-title'>Security</span>
            <span className='span-Edit'>Edit</span>
            <RuleCard/>
        </div>
    );

}

export default SecurityItem;