import './CartItem.css'

function CartItem(){
    let cart_item = {
        name : 'item1',
        price : 30 
    }

    return (
    <div>
        <span>{cart_item.name}</span>
        <span className='Cart-item-price'>${cart_item.price}</span>
    </div>);

}

export default CartItem;