import './SectionBodySecurity.css'
import SecurityGroupRadio from './SecurityGroupRadio';
import NewGroupPlain from './NewGroup/NewGroupPlain';
import ExistingGroupPlain from './ExistingGroup/ExistingGroupPlain'; 


import { useContext } from 'react';
import { AppContext } from '../../../../context'

function renderSwitch(param) {
    switch(param) {
        case 1:
            return <NewGroupPlain/>;
        default:
            return <ExistingGroupPlain/>;

    }
  }

const SectionBodySecurity = () => {
    const { securityRadioBtnId } = useContext(AppContext);
    
    return (
        <div className='Section-body-security'>
            <SecurityGroupRadio/>
            {renderSwitch(securityRadioBtnId)}
        </div>
    );

}

export default SectionBodySecurity;
