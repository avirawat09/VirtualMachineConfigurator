import './PortRange.css'
import '../RuleCard.css'

import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


function PortRange(){
    const { ruleItem } = useContext(AppContext);

    let portRange = 'portRange' in ruleItem ? ruleItem.portRange:443;
    return (
        <div className='PortRange Card-elements'>
            <span>PortRange</span>
            <input className='Text-input' type = 'textbox' value={portRange} disabled/>
        </div>
    );

}

export default PortRange;