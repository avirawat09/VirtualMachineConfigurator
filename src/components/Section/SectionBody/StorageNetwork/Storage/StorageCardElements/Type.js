import './Type.css';
import '../StorageCard.css'

const Type = () =>{
    const type_options = [
        { label: "SSD", value: "SSD"},
        { label: "Magnetic Disks", value: "Magnetic Disks"}
    ]
    const handleChange =()=>{};
    let value ="SS";

    return(
        <div className='Type Card-elements'>
            <span>
            <label className='Type-label'>Type</label>
            <select defaultValue={'Storage'} className='Type-selector' value={value} onChange={handleChange}>
                     {type_options.map((option) => (
                         <option value={option.value}>{option.label}</option>))
                     }
            </select>

            </span>
        </div>
    );

}

export default Type;