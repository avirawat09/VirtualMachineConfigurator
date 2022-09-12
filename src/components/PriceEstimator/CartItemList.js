import './CartItemList.css'
import CartItem from './CartItem';
import { useContext , useState, useEffect} from 'react';
import { AppContext } from '../../context'




function CartItemList(){
    const {cartImage , cartInstanceType, cartStorage, cartNetwork} = useContext(AppContext);
    const [cartObj, setCartObj] = useState({});

    useEffect(() => {
        if('name' in cartImage && 'price' in cartImage){
            let updatedObj = {image: [cartImage.name, cartImage.price]}
            setCartObj({...cartObj, ...updatedObj})
        }
    }, [cartImage]);

    useEffect(() => {
        if('lastUpdated' in cartInstanceType){
            if (cartInstanceType.lastUpdated == 'cpu'){
                let updatedCpuObj = {cpu: ['CPU - ' + cartInstanceType.cpuName, cartInstanceType.cpuPrice]}
                setCartObj({...cartObj, ...updatedCpuObj})
    
            }
            else if(cartInstanceType.lastUpdated == 'memory'){
                if('memoryName' in cartInstanceType){
                    let updatedMemoryObj = {memory: ['Memory - ' + cartInstanceType.memoryName, cartInstanceType.memoryPrice]}
                    setCartObj({...cartObj, ...updatedMemoryObj})
                }
            }            
        }    
        
    }, [cartInstanceType]);


    // alert('CART:\n'+Object.entries(cartObj).map((o) => o+ '\n'))


    return (<div className='Cart-item-list'>
        {Object.values(cartObj).map((obj) => <CartItem detail = {obj}/>)}
        
    </div>);

}

export default CartItemList;