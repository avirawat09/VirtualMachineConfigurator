import './PriceEstimator.css'
import PriceEstimatorTitle from './PriceEstimatorTitle';
import CartItemList from './CartItemList';
import CartTotal from './CartTotal';
function PriceEstimator(){
    return (
        <div className="PriceEstimator-body">    
        <PriceEstimatorTitle/>   
        <CartItemList/> 
        <div><hr className='Horizontal-line'></hr></div>
        <CartTotal/>
        </div>
    );


}

export default PriceEstimator;