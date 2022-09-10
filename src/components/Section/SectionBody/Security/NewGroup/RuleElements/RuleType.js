import './RuleType.css'
import '../RuleCard.css'

function RuleType(){
    const type_options = [
        { label: "HTTPS", value: "HTTPS"},
        { label: "SSH", value: "SSH"},
        { label: "SMTP", value: "SMTP"}
    ]
    const handleChange =()=>{};
    let value ="SS";

    return (
        <div className='RuleType Card-elements'>
            <span> Type</span>            
            <select defaultValue={'Type'} className='Type-selector' value={value} onChange={handleChange}>
                     {type_options.map((option) => (
                         <option value={option.value}>{option.label}</option>))
                     }
            </select>

        </div>
    );

}

export default RuleType;