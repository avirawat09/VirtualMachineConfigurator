import './SectionBody.css';
import SectionTitle from './SectionTitle';
import SectionList from './SectionList';
function SectionBody(){
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
    <div className='Section-body'>
    <SectionTitle/>    
    <SectionList list = {section_list}/>
    </div>);


}


export default SectionBody;