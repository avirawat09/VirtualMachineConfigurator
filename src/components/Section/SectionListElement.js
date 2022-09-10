import './SectionListElement.css';

function SectionListElement(props){
    const element = props.detail;
    return (
        <button className='Section-list-element'>
            {element.id}. {element.name}
        </button>
    );


}


export default SectionListElement;