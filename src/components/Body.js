import './Body.css';
import SectionBody  from './Section/SectionBody';
import PriceEstimatorCanvas from './PriceEstimator/PriceEstimatorCanvas';
// import Sec
function Body() {

    return (
        <div className='Body'>
            <SectionBody></SectionBody>
            <PriceEstimatorCanvas></PriceEstimatorCanvas>
        </div>);

}
export default Body;