
import './InstanceItemCard.css';


const InstanceItemCard = () =>{
    const instance_detail = {
        type : "General Purpose",
        cpu: "4 CPU",
        ram: "8 GB",
        storage: "512GB Storage",
        performance: "Moderate Network Performance"

    }   
    return(
        <div className='Instance-item-card'>
            <div className='row-title'>{instance_detail.type}</div>
            <div>
            <div className='col'>{instance_detail.cpu}</div>
            <div className='col2'>{instance_detail.storage}</div>
            </div>
            <div className='row'>{instance_detail.ram}</div>
            <div className='row'>{instance_detail.performance}</div>
        </div>
    );

}

export default InstanceItemCard;