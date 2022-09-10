
import './BandwidthItem.css';
import BandwidthItemCard from './BandwidthItemCard';


const BandwidthItem = () =>{

    return(
        <div className='Bandwidth-item'>
            <span className='span-title'>Bandwidth</span>
            <span className='span-Edit'>Edit</span>
            <BandwidthItemCard/>
        </div>
    );

}

export default BandwidthItem;