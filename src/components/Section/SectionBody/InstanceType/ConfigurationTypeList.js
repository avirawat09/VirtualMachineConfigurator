import './ConfigurationTypeList.css';
const ConfigurationTypeList = () => {
    const cpu_options = [
        { label: '1 Core', value: '1 Core' },
        { label: '2 Core', value: '2 Core' },
        { label: '4 Core', value: '4 Core' },
        { label: '6 Core', value: '6 Core' },
        { label: '8 Core', value: '8 Core' }
    ]    

    const memory_options = [
        { label: '256 MB', value: '256 MB' },
        { label: '512 MB', value: '512 MB' },
        { label: '1 GB', value: '1 GB' },
        { label: '4 GB', value: '4 GB' },
        { label: '8 GB', value: '8 GB' }
    ]    
    const handleChange =()=>{};
    let value ="SS";

    return (
        <div className='configuration-type-list'>

            <select defaultValue={'CPU Cores'} className='Drop-down' value={value} onChange={handleChange}>
                     {cpu_options.map((option) => (
                         <option value={option.value}>{option.label}</option>))
                     }
            </select>
            <select defaultValue={'Memory'} className='Drop-down' value={value} onChange={handleChange}>
                     {memory_options.map((option) => (
                         <option value={option.value}>{option.label}</option>))
                     }
            </select>


            <></>
        </div>
    );
}

export default ConfigurationTypeList;