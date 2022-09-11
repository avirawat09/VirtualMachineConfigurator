import './InstanceImageForm.css'

import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../../context'


function InstanceImageForm(props){
    const { cartImage, handleCartImage, handleSecChangeCount } = useContext(AppContext);

    const [architectureId , setArchitectureId] = useState('64-bit (ARM)');
    const detail = props.detail;
    const id = detail.id;
    const clickHandlerForm = (event) => { 
        const updatedObj = {...cartImage, ...detail, architecture: architectureId}; 
        console.log('updating');
        handleCartImage(updatedObj)
        handleSecChangeCount(1)

    };

    const handleValueChange = (event) =>{
        event.preventDefault();       
        setArchitectureId(event.target.value)
    }

    const showLinuxOption = () => {
        return (<>
        <input 
            type = "radio" 
            name = "architecture" 
            value = "64-bit (ARM)" 
            onChange={handleValueChange}
            checked = {architectureId=="64-bit (ARM)"}/>64-bit (ARM)
        <input 
            type = "radio" 
            name = "architecture" 
            value = "64-bit (x86)"
            onChange={handleValueChange}
            checked = {architectureId=="64-bit (x86)"}/>64-bit (x86) 
        </>);
    }

    const showWindowsOption = () => {
        return (<>
        <input type="radio" name="architecture" value="64-bit (ARM)" checked="true" /> 64-bit (ARM)
        </>);
    }
    
    return (

        <form className='Instance-image-form' onSubmit={(event) => clickHandlerForm(event) } >
        { id == 4? showWindowsOption(): showLinuxOption() }
        <button className="Form-button" type="submit" >Select</button>
        </form>      
        );

}

export default InstanceImageForm;