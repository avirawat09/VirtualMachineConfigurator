import './Section.css';
import SectionTitle from './SectionTitle';
import SectionList from './SectionList';
import SectionBody from './SectionBody/SectionBody';
import SectionRegionSelector from './SectionRegionSelector';

function Section(){
    const section_list = [
        {
            id: 1,
            title:'Choose Image',
        },
        {
            id: 2,
            title:'Choose Instance Type',
        },
        {
            id: 3,
            title:'Choose Storage and Network',
        },
        {
            id: 4,
            title:'Configure Security',
        },
        {
            id: 5,
            title:'Review & Launch',
        }
    ]

    return (
        <div className='Section'>
            <SectionTitle/> 
            <SectionRegionSelector/>   
            <SectionList list = {section_list}/>
            <SectionBody/>
        </div>
        );


}


export default Section;