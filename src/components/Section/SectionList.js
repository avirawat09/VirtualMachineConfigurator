import './SectionList.css';
import SectionListElement from './SectionListElement';
function SectionList(props){
    const section_list = props.list
    return (
        <div className='Section-list'>
            { section_list.map((section) => <SectionListElement detail = {section}/>)}
        </div>);
}

export default SectionList;