import './CartItemList.css'
import CartItem from './CartItem';
function CartItemList(){
    return (<div className='Cart-item-list'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </div>);

}

export default CartItemList;