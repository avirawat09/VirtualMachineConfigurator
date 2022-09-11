import './SectionBodyInstanceType.css';
import InstanceTypeList from './InstanceTypeList';
import CreateConfigText from './CreateConfigText';
import ConfigurationTypeList from './ConfigurationTypeList';

import { instanceTypeDetailList } from '../../../../data/data';

const SectionBodyInstanceType = () =>{

    return(
        <div className='Section-body-instance-type'>
            <InstanceTypeList list={instanceTypeDetailList}/>            
            <CreateConfigText/>
            <ConfigurationTypeList/>
        </div>
    );

}

export default SectionBodyInstanceType;