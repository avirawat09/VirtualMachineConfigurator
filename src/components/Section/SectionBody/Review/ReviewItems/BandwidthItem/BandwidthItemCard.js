
import './BandwidthItemCard.css';



const BandwidthItemCard = () =>{
    const storage = '512GB'
    return(
        <div className='Bandwidth-item-card'>
                <span className='Storage'>
                    <span className='Storage-qty'>
                        {storage}
                    </span>
                    /Month
                </span>
        </div>
    );

}

export default BandwidthItemCard;