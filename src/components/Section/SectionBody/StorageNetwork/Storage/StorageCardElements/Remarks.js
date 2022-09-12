import './Remarks.css';
import '../StorageCard.css'
import { useContext } from 'react';
import { AppContext } from '../../../../../../context'


const Remarks = () =>{
    const { cartStorage , handleCartStorage } = useContext(AppContext);

    const handleTextChange = (event) => {
        const updatedRemark = event.target.value;
        const updatedObj = {remark : updatedRemark}
        handleCartStorage(updatedObj)
    }
    const value = 'remark' in cartStorage ? cartStorage.remark : ''
    return(
        <div className='Remarks Card-elements'>
            <span><label>Remark</label></span>
            <div><input type="textbox" onBlur={(event) => handleTextChange(event)} defaultValue={value}/></div>
        </div>
    );

}

export default Remarks;