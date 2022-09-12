import './CartTotal.css'
import { useContext , useState, useEffect} from 'react';
import { AppContext } from '../../context'


function CartTotal(){
    const { cartTotal } = useContext(AppContext);
    const total = 0;
    return (
    <div className='Cart-total'>
        ${cartTotal}/mo
    </div>);

}


export default CartTotal;