import './Section.css';
import SectionTitle from './SectionTitle';
import SectionList from './SectionList';
import SectionBody from './SectionBody/SectionBody';
import SectionRegionSelector from './SectionRegionSelector';
import DecisionButtonList from './DecisionButtons/DecisionButtonList';
function Section(){
    const section_list = [
        {
            id: 1,
            name:'Choose Image',
        },
        {
            id: 2,
            name:'Choose Instance Type',
        },
        {
            id: 3,
            name:'Choose Storage and Network',
        },
        {
            id: 4,
            name:'Configure Security',
        },
        {
            id: 5,
            name:'Review & Launch',
        }
    ]

    return (
        <div className='Section'>
            <SectionTitle/> 
            <SectionRegionSelector/>   
            <SectionList list = {section_list}/>
            <SectionBody/>
            <DecisionButtonList/>
        </div>
        );


}


export default Section;