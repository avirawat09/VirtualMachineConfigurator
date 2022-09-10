import './SectionBodyReview.css';
import GenerateJson from './GenerateJson';
import ReviewPlain from './ReviewPlain';
const SectionBodyReview = () =>{
    return(
        <div className='Section-body-review'>
            <GenerateJson/>
            <ReviewPlain/>
        </div>
    );

}

export default SectionBodyReview;