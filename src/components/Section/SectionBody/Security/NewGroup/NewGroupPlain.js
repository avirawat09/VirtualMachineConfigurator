import './NewGroupPlain.css'
import NewGroupName from './NewGroupName';
import AddNewGroupButton from './AddNewGroupButton';
import RuleList from './RuleList';
const NewGroupPlain = () => {
    return(
        <div className='New-group-plain'>
            <NewGroupName/>
            <RuleList/>
            <AddNewGroupButton/>
        </div>
    );


}


export default NewGroupPlain;