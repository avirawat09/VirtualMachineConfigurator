import './BandwidthSlider.css'
import ReactSlider from "react-slider";
    

const BandwidthSlider = () => {
    return (
        <div className='Slider'>
            Slider
            <ReactSlider
            className="customSlider"
            trackClassName="customSlider-track" 
            thumbClassName="customSlider-thumb"
            />
        </div>
    );
}

export default BandwidthSlider;


