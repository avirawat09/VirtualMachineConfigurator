import './Section.css';
import SectionTitle from './SectionTitle';
import SectionList from './SectionList';
import SectionBody from './SectionBody/SectionBody';
import SectionRegionSelector from './SectionRegionSelector';
import DecisionButtonList from './DecisionButtons/DecisionButtonList';
function Section(){

    return (
        <div className='Section'>
            <SectionTitle/> 
            <SectionRegionSelector/>   
            <SectionList/>
            <SectionBody/>
            <DecisionButtonList/>
        </div>
        );


}


export default Section;