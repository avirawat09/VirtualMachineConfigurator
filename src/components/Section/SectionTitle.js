import './SectionTitle.css'

import { useContext } from 'react';
import { AppContext } from '../../context'
import { sectionList } from '../../data/data';

function SectionTitle(){
    const { secId } = useContext(AppContext);
    let title = 'Title'
    sectionList.map((obj)=> {
        if(obj.id === secId){
            title = obj.name;
        }
    })


    return (
    <div className='Section-title'>
        {title}
    </div>);


}


export default SectionTitle;