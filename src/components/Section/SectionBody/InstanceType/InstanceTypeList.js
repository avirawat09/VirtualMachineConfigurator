
import './InstanceTypeList.css';
import InstanceTypeListElement from './InstanceTypeListElement';

function InstanceTypeList(props){
    const instance_type_list = props.list
    return (
        <div className='Instance-type-list'>
            { instance_type_list.map((instance_type) => <InstanceTypeListElement detail = {instance_type}/>)}
        </div>);
}

export default InstanceTypeList;