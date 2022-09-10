
import './NetworkPlain.css';
import NetworkPlainTitle from './NetworkPlainTitle';
import BandwidthSlider from './BandwidthSlider';

const NetworkPlain = () =>{

    return(
        <div className='Network-plain'>
            <NetworkPlainTitle/>
            <BandwidthSlider/>
        </div>
    );

}

export default NetworkPlain;