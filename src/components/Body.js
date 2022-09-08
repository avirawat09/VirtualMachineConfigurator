import './Body.css';
import Section  from './Section/Section';
import PriceEstimatorCanvas from './PriceEstimator/PriceEstimatorCanvas';
// import Sec
function Body() {

    return (
        <div className='Body'>
            <Section></Section>
            <PriceEstimatorCanvas></PriceEstimatorCanvas>
        </div>);

}
export default Body;