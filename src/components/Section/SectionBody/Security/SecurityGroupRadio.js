import './SecurityGroupRadio.css'
// import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../../../context'

const SecurityGroupRadio = () => {
    const { handleSecurityRadioBtnId } = useContext(AppContext);
    // let [count , set_count] = useState(1);
    // const clickHandler  = () => {
    //     count= count +1;
    //     set_count(count);
    // }
    const handleClick = (event) => {
        handleSecurityRadioBtnId(parseInt(event.target.value) )
    }

    return (
        <div className='Security-group-radio' >
            <form >
                <div className="">
                    <label> 
                        <input type="radio" name="security" value='1'  checked="true" className=""  onClick={(event)=> handleClick(event)} /> Create a new security group 
                    </label>
                </div>
                <div className="">
                    <label>
                        <input type="radio" name="security" value="2" className="" onClick={(event)=> handleClick(event)}/> Select an existing security group 
                    </label>
                </div>
            </form>
               
        </div>
    );
}

export default SecurityGroupRadio;
