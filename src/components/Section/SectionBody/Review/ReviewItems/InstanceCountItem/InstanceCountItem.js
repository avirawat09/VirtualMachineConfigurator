import './InstanceCountItem.css';

const InstanceCountItem = () =>{
    return(
        <div className='Instance-count-item'>
            <span className='Span-title'>Number Of Instances</span>
            <input className='Input-text' type='textbox' defaultValue={1}/>
            
        </div>
    );

}

export default InstanceCountItem;