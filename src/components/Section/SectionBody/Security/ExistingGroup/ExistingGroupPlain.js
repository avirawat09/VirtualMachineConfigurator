import './ExistingGroupPlain.css'

function ExistingGroupPlain() {
    const group_list_options = [
        { label: "HTTPS", value: "HTTPS"},
        { label: "SSH", value: "SSH"},
        { label: "SMTP", value: "SMTP"}
    ]
    const handleChange =()=>{};
    let value ="SS";
    return (
        <div className='Existing-group-plain'>
            <span>Select Security Group</span>
             <select defaultValue={'Region'} className='Existing-group-selector' value={value} onChange={handleChange}>
                     {group_list_options.map((option) => (
                         <option value={option.value}>{option.label}</option>))
                     }
            </select>

        </div>
    );
}

export default ExistingGroupPlain;