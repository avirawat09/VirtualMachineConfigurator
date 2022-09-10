import './SecurityGroupRadio.css'
// import { useState } from 'react';
const SecurityGroupRadio = () => {

    // let [count , set_count] = useState(1);
    // const clickHandler  = () => {
    //     count= count +1;
    //     set_count(count);
    // }

    return (
        <div className='Security-group-radio' >
            <form >
                <div className="">
                    <label> 
                        <input type="radio" name="security" value="new"  checked="true" className=""  /> Create a new security group 
                    </label>
                </div>
                <div className="">
                    <label>
                        <input type="radio" name="security" value="existing" className="" /> Select an existing security group
                    </label>
                </div>
            </form>
               
        </div>
    );
}

export default SecurityGroupRadio;
