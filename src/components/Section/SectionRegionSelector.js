import './SectionRegionSelector.css'
import {regionMap} from '../../data/data'
import { useContext } from 'react';
import { AppContext } from '../../context'


function SectionRegionSelector(props){
    const { handleChangeRegionId , regionId} = useContext(AppContext);

    
    const regionMapList = Object.entries(regionMap)
    const handleOptionClick = (event) => {
        handleChangeRegionId(event.target.value)
    }

    return (
        <div className='Section-region-selector'>        
            <select defaultChecked ={'Region'} defaultValue={'Region'} className='Selector-input'  value={regionId} onChange={handleOptionClick}>
                {
                  regionMapList.map((option) => (
                  <option value = {option[0]} >
                    <span> {option[1]} </span>
                  </option> 
                ))
                }
            </select>
            
        </div>  
    );
}




export default SectionRegionSelector;

