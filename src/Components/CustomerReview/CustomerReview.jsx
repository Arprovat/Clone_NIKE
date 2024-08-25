
import Slider from 'react-slick';
import ReviewCard from "../ReviewCard/ReviewCard";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviews } from '../../conastant';
const CustomerReview = () => {
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "gray" ,borderRadius: "100%" }}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow />,
    prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className="max-container">
          <h1 className="text-4xl text-center leading-normal font-palanquin font-semibold">What Our <span className="text-coral-red ">Customer </span>Say?</h1>
          <p className="mt-4 info-text m-auto font-montserrat text-center max-w-lg text-slate-gray">Discover why our shoes are the perfect fit for style and comfort. Read what our customers have to say about their experiences with our brand, from unparalleled comfort to eye-catching designs. Your perfect pair is just a step away!</p>
          <div className="max-container w-full mx-auto px-4 py-8">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Slider>
    </div>
        </div>
    );
};

export default CustomerReview;