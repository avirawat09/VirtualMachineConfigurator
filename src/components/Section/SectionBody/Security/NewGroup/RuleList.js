import './RuleList.css'
import RuleCard from './RuleCard';

function RuleList(){

    return (
        <div>
            <span className='Add-rule'>Add Rule</span>
            <div className='Rule-list'>
                <RuleCard/>
            </div>
        </div>
    );
}

export default RuleList;