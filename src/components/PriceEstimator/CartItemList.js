import './CartItemList.css'
import CartItem from './CartItem';
import { useContext , useState, useEffect} from 'react';
import { AppContext } from '../../context'




function CartItemList(){
    const {cartImage , cartInstanceType, cartStorage, cartNetwork, handleCartTotal}  = useContext(AppContext);
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
    const cartValues = Object.values(cartObj)
    // let total = Object.values(cartObj).map((obj) =>  {obj[1]})
    // alert('CART:\n'+Object.entries(cartObj).map((o) => o+ '\n'))
    // alert(Object.keys(cartObj))
    let total = 0;
    for (let i = 0; i < cartValues.length; i++) {
        total += cartValues[i][1] ;
      }
    handleCartTotal(total)

    return (<div className='Cart-item-list'>
        {Object.values(cartObj).map((obj) => <CartItem detail = {obj}/>)}
        
    </div>);

}

export default CartItemList;