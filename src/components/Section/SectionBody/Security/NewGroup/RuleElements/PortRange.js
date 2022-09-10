import './PortRange.css'
import '../RuleCard.css'

function PortRange(){
    let port_range = 443;
    return (
        <div className='PortRange Card-elements'>
            <span>PortRange</span>
            <input className='Text-input' type = 'textbox' value={port_range} disabled/>
        </div>
    );

}

export default PortRange;