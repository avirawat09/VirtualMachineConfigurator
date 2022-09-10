import './Protocol.css'
import '../RuleCard.css'

function Protocol(){

    return (
        <div className='Protocol Card-elements'>
            <span>Protocol</span>
            <input className='Text-input' type = 'textbox' value='TCP' disabled/>
        </div>
    );

}

export default Protocol;