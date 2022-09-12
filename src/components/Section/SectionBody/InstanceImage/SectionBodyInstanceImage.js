import './SectionBodyInstanceImage.css'
import SectionBodyInstanceImageCard from './InstanceImageCard';

import { useContext } from 'react';
import { AppContext } from '../../../../context'
import {instanceImageList} from '../../../../data/data'

function SectionBodyInstanceImage(){
    const { regionId } = useContext(AppContext);
    let windowId = [1,2].includes(parseInt(regionId)) ? 0:4;
    
    return  (
        <div>
            {instanceImageList.map((instance_image)=> instance_image.id != windowId ? <SectionBodyInstanceImageCard detail = {instance_image} key={instance_image.id}/> : null)}            
        </div>
    );


}

export default SectionBodyInstanceImage;