import './Body.css';
import Section  from './Section/Section';
import PriceEstimatorCanvas from './PriceEstimator/PriceEstimatorCanvas';

function Body() {

    return (
        <div className='Body'>
            <Section/>
            <PriceEstimatorCanvas/>
        </div>);

}
export default Body;