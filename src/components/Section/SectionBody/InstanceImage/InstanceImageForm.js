import './InstanceImageForm.css'


function InstanceImageForm(props){
    // const detail = props.detail
    return (

        <form className='Instance-image-form'>
        <div className="">
            <label> 
                <input type="radio" name="architecture" value="64-bit(x86)"  checked="true" className="" /> 64-bit (x86) 
            </label>
        </div>

        <div className="">
            <label>
                <input type="radio" name="architecture" value="64-bit(ARM)" className="" /> 64-bit (ARM)
            </label>
        </div>

        <div className="">
            <button className="Form-button" type="submit">
                Select
            </button>
        </div>

        </form>      
        );

}

export default InstanceImageForm;