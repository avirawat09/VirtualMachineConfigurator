import './GenerateJson.css';
import { useContext } from 'react';
import { AppContext } from '../../../../context'

const GenerateJson = () =>{
    const { cartImage, cartInstanceType, cartStorage, cartTotal, cartNetwork, ruleList } = useContext(AppContext);
    const machineObj = {}
    machineObj.image = cartImage
    machineObj.instanceType = cartInstanceType
    machineObj.storage = cartStorage
    machineObj.network = cartNetwork
    machineObj.rules = ruleList
    machineObj.total = cartTotal




    const handleClick = (event) =>{
        const fileName = "my-file";
        const json = JSON.stringify(machineObj, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const href = URL.createObjectURL(blob);
      
        // create "a" HTLM element with href to file
        const link = document.createElement("a");
        link.href = href;
        link.download = fileName + ".json";
        document.body.appendChild(link);
        link.click();
      
        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }

    return(
        <div >
            <button className='Generate-json' onClick={(event) => {handleClick(event)}}>Generate JSON</button>
        </div>
    );

}

export default GenerateJson;