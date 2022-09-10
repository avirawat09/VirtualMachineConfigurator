
import './ReviewPlain.css';
import ImageItem from './ReviewItems/ImageItem/ImageItem';
import InstanceItem from './ReviewItems/InstanceItem/InstanceItem';
import BandwidthItem from './ReviewItems/BandwidthItem/BandwidthItem';
import InstanceCountItem from './ReviewItems/InstanceCountItem/InstanceCountItem';
import SecurityItem from './ReviewItems/SecurityItem/SecurityItem';
import StorageItem from './ReviewItems/StorageItem/StorageItem';

const ReviewPlain = () =>{

    return(
        <div className='Review-plain'>
            <ImageItem/>
            <InstanceItem/>
            <BandwidthItem/>
            <StorageItem/>
            <SecurityItem />
            <InstanceCountItem/>
        </div>
    );

}

export default ReviewPlain;