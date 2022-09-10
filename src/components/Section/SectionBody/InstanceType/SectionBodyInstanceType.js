import './SectionBodyInstanceType.css';
import InstanceTypeList from './InstanceTypeList';
import CreateConfigText from './CreateConfigText';
import ConfigurationTypeList from './ConfigurationTypeList';

const SectionBodyInstanceType = () =>{
    const instance_type_list = [
        {
            id: 1,
            name:'General Purpose' 
        },
        {
            id: 2,
            name: 'CPU Optimised'
        },
        {
            id: 3,
            name: 'Storage Optimised'
        },
        {
            id: 4,
            name: 'Network Optimised'
        }
    ]

    return(
        <div className='Section-body-instance-type'>
            <InstanceTypeList list={instance_type_list}/>            
            <CreateConfigText/>
            <ConfigurationTypeList/>
        </div>
    );

}

export default SectionBodyInstanceType;