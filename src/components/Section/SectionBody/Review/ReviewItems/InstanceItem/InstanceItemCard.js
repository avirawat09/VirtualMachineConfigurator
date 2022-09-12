
import './InstanceItemCard.css';


const InstanceItemCard = (props) =>{
    const detail  = props.detail;
       
    return(
        <div className='Instance-item-card'>
            <div className='row-title'>{detail.name}</div>
            <div>
            <div className='col'>{detail.cpuName}</div>
            <div className='col2'>{"512 GB"}</div>
            </div>
            <div className='row'>{detail.memoryName}</div>
            <div className='row'>{"Moderate Network Performance"}</div>
        </div>
    );

}

export default InstanceItemCard;