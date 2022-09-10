import './RuleCard.css'

import RuleType from './RuleElements/RuleType';
import Protocol from './RuleElements/Protocol';
import PortRange from './RuleElements/PortRange';
import Source from './RuleElements/Source';
import Description from './RuleElements/Description';


function RuleCard(){
    return (
        <div className='Rule-card'>
            <RuleType/>
            <Protocol/>
            <PortRange/>
            <Source/>
            <Description/>
        </div>
    );
}

export default RuleCard;