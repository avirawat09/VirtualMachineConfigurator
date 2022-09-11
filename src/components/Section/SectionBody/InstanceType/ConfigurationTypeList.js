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
        const cpuObj = {
            cpuId: selectedCpuId,
            cpuName: cpuOptions[selectedCpuId-1].name,
            id: instanceTypeId,
            name: instanceName 
            }   
        handleCartInstanceType({...cartInstanceType, ...cpuObj })
        };

    const handleMemoryChange = (event ) => { 
        const selectedMemoryId =  event.target.value; 
        const memoryObj = {
            memoryId: selectedMemoryId,
            memoryName: memoryOptions[selectedMemoryId-1].name,
            id: instanceTypeId,
            name: instanceName 
            }
        handleCartInstanceType({...cartInstanceType, ...memoryObj })
        
    };
    let valueCpu = 'cpuId' in cartInstanceType ? cartInstanceType.cpuName : "";
    let valueMemory = 'memoryId' in cartInstanceType ? cartInstanceType.memoryName : "";


    return (
        <div className='configuration-type-list'>

            <select defaultChecked ={'CPU Cores'} defaultValue={'CPU Cores'} className='Drop-down' value={''} onChange={handleCpuChange}>
                     {cpuOptions.map((option) => (
                         <option value={option.id}>{option.name}</option>))
                     }
            </select>
            <select defaultChecked ={'Memory'} defaultValue={'Memory'} className='Drop-down' value={''} onChange={handleMemoryChange}>
                     {memoryOptions.map((option) => (
                         <option value={option.id}>{option.name}</option>))
                     }
            </select>


            <></>
        </div>
    );
}

export default ConfigurationTypeList;