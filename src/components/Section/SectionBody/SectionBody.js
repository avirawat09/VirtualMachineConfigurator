import './SectionBody.css';
import SectionBodyInstanceImage from './InstanceImage/SectionBodyInstanceImage';
import SectionBodyInstanceType from './InstanceType/SectionBodyInstanceType';
import SectionBodyStorageNetwork from './StorageNetwork/SectionBodyStorageNetwork';
import SectionBodySecurity from './Security/SectionBodySecurity';
import SectionBodyReview from './Review/SectionBodyReview';

function renderSwitch(param) {
    switch(param) {
        case '1':
            return <SectionBodyInstanceImage/>;
        case '2':
            return <SectionBodyInstanceType/>;
        case '3':
            return <SectionBodyStorageNetwork/>;
        case '4':
            return <SectionBodySecurity/>                  
        default:
            return <SectionBodyReview/>;

    }
  }
function SectionBody(){
    const id = '5';
   
    return (
    <div className='Section-body'>
        {renderSwitch(id)}
        
    </div>);

}

export default SectionBody;