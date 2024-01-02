import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import promotionBanners from "../assets/promotionBanners.png"
import promotion from "../assets/promotion.png"



const CampainSlider = () => {

    return (<>
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
        >
            <div>
                <img src={promotionBanners} />
            </div>
            <div>
                <img src={promotionBanners} />
            </div>

        </Carousel>
    </>)
}
export default CampainSlider;