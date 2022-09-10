import './SectionBodySecurity.css'
import SecurityGroupRadio from './SecurityGroupRadio';
import NewGroupPlain from './NewGroup/NewGroupPlain';
import ExistingGroupPlain from './ExistingGroup/ExistingGroupPlain'; 
function renderSwitch(param) {
    switch(param) {
        case '1':
            return <NewGroupPlain/>;
        default:
            return <ExistingGroupPlain/>;

    }
  }

const SectionBodySecurity = () => {
    const new_group = '2';

    return (
        <div className='Section-body-security'>
            <SecurityGroupRadio/>
            {renderSwitch(new_group)}
        </div>
    );

}

export default SectionBodySecurity;
