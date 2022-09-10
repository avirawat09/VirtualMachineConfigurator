import './ImageItemForm.css'


function ImageItemForm(props){
    const architecture = props.architecture
    return (

        <form className='Image-item-form'>
        <div className="">
            <label> 
                <input type="radio" name="architecture" value={architecture}  checked="true" className="" /> {architecture} 
            </label>
        </div>

        </form>      
        );

}

export default ImageItemForm;