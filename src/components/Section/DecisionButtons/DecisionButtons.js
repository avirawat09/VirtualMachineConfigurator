import './DecisionButtons.css'

function DecisionButtons(props){
    const name = props.name;
    let class_name = 'Decision-buttons ' + name
    return (
        <button className={class_name}>
            <span>{name}</span>
        </button>
    );
}

export default DecisionButtons;