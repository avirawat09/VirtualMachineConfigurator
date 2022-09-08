import './SectionListElement.css';

function SectionListElement(props){
    const element = props.detail;
    return (
        <button className='Section-list-element'>
            {element.id}. {element.title}
        </button>
    );


}


export default SectionListElement;