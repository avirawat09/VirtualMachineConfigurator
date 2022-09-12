import './SectionList.css';
import SectionListElement from './SectionListElement';
import {sectionList} from '../../data/data'

function SectionList(){

    return (
        <div className='Section-list'>
            { sectionList.map((section) => <SectionListElement detail = {section} key = {section.id}/>)}
        </div>);
}

export default SectionList;