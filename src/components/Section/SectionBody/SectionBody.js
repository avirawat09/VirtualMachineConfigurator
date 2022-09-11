import './SectionBody.css';
import SectionBodyInstanceImage from './InstanceImage/SectionBodyInstanceImage';
import SectionBodyInstanceType from './InstanceType/SectionBodyInstanceType';
import SectionBodyStorageNetwork from './StorageNetwork/SectionBodyStorageNetwork';
import SectionBodySecurity from './Security/SectionBodySecurity';
import SectionBodyReview from './Review/SectionBodyReview';


import { useContext } from 'react';
import { AppContext } from '../../../context'

function renderSwitch(param) {
    switch(param) {
        case 1:
            return <SectionBodyInstanceImage/>;
        case 2:
            return <SectionBodyInstanceType/>;
        case 3:
            return <SectionBodyStorageNetwork/>;
        case 4:
            return <SectionBodySecurity/>
        case 5:
            return <SectionBodyReview/>;
        default:
            return <SectionBodyInstanceImage/>;
        
    }
  }
export default function SectionBody(){
    const { secId } = useContext(AppContext);

    return (
    <div className='Section-body'>
        {renderSwitch(secId)}        
    </div>);
}

