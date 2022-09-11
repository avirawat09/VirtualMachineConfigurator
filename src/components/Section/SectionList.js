import './SectionList.css';
import SectionListElement from './SectionListElement';
import {sectionList} from '../../data/data'

function SectionList(){

    return (
        <div className='Section-list'>
            { sectionList.map((section) => <SectionListElement detail = {section}/>)}
        </div>);
}

export default SectionList;