import './ConfigurationTypeList.css';
import { useContext } from 'react';
import { AppContext } from '../../../../context'
import { instanceTypeDetailList }  from '../../../../data/data'


const ConfigurationTypeList = () => {
    const { instanceTypeId ,cartInstanceType, handleCartInstanceType} = useContext(AppContext);
    const instanceName = instanceTypeDetailList[instanceTypeId-1].name
    
    const cpuOptions = instanceTypeDetailList[instanceTypeId-1].cpuOptions
    const memoryOptions = instanceTypeDetailList[instanceTypeId-1].memoryOptions

    const handleCpuChange = (event ) => { 
        const selectedCpuId =  event.target.value;
        const selectedCpuName = cpuOptions[selectedCpuId-1].name
         
        const cpuObj = {
            cpuId: selectedCpuId,
            cpuName: selectedCpuName,
            id: instanceTypeId,
            name: instanceName,
            cpuPrice: selectedCpuName == "16 Core" ? 40 : selectedCpuName == "8 Core" ? 20 : 0,
            lastUpdated: 'cpu'
            }   
        handleCartInstanceType({...cartInstanceType, ...cpuObj })
        };

    const handleMemoryChange = (event ) => { 
        const selectedMemoryId =  event.target.value; 
        const selectedMemoryName = memoryOptions[selectedMemoryId-1].name
        const memoryObj = {
            memoryId: selectedMemoryId,
            memoryName: selectedMemoryName,
            id: instanceTypeId,
            name: instanceName,
            memoryPrice: selectedMemoryName == "64 GB" ? 40 : selectedMemoryName == "32 GB" ? 20 : 0,
            lastUpdated: 'memory'
            }
        handleCartInstanceType({...cartInstanceType, ...memoryObj })
        
    };
    let valueCpu = 'cpuId' in cartInstanceType ? cartInstanceType.cpuName : "";
    let valueMemory = 'memoryId' in cartInstanceType ? cartInstanceType.memoryName : "";
    
    // alert(Object.entries(cartInstanceType).map((o) => o+ '\n'))
    
    return (
        <div className='configuration-type-list'>

            <select defaultChecked ={'CPU Cores'} defaultValue={'CPU Cores'} className='Drop-down'  onChange={handleCpuChange}>
                     {cpuOptions.map((option) => (
                         <option value={option.id}>{option.name}</option>))
                     }
            </select>
            <select defaultChecked ={'Memory'} defaultValue={'Memory'} className='Drop-down'  onChange={handleMemoryChange}>
                     {memoryOptions.map((option) => (
                         <option value={option.id}>{option.name}</option>))
                     }
            </select>


            <></>
        </div>
    );
}

export default ConfigurationTypeList;