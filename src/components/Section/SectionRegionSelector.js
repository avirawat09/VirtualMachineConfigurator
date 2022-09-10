// import { useState } from 'react';
import './SectionRegionSelector.css'
import { useState } from 'react';
function SectionRegionSelector(props){
    const options = [
        { label: 'us-east-1', value: 'us-east-1' },
        { label: 'us-east-2', value: 'us-east-2' },
        { label: 'us-west-1', value: 'us-west-1' },
        { label: 'india-1', value: 'india-1' },
      ];
    
    // return (
    //     <div>
    //         <Select className='Section-region-selector' defaultInputValue='Region' options = {options}/>
    //     </div>
    //   );
      const [value, setValue] = useState('us-east-1');
      const handleChange = (event) => {
          setValue(event.target.value);
        };
  
      return (
        <div className='Section-region-selector'>
            
            <select defaultValue={'Region'} className='Selector-input' value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>))
                }
            </select>
            
        </div>  
    );
}




export default SectionRegionSelector;

