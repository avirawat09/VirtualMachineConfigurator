import './CartItem.css'


function CartItem(props){

    const detail = props.detail;
    let cart_item = {
        name : detail[0],
        price : detail[1] 
    }
    return (
    <div>
        <span>{cart_item.name}</span>
        <span className='Cart-item-price'>${cart_item.price}</span>
    </div>);

}

export default CartItem;