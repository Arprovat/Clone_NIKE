
import { PropTypes } from 'prop-types';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    return (
        <div className='mx-10  '>
            <div className="bg-white   p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={review.imgURL}
        
        alt={review.customerName}
        className="w-16 h-16 rounded-full mb-4"
      />
      <p className="text-sm text-gray-700 mb-4 text-center">{review.feedback}</p>
      <div className="flex items-center mb-4">
        <FaStar className="text-yellow-500 mr-1" />
        <p className="text-sm text-gray-700">{review.rating}/5</p>
      </div>
      <h3 className="text-lg font-semibold">{review.customerName}</h3>
    </div>
        </div>
    );
};
ReviewCard.propTypes ={
    review: PropTypes.object
}

export default ReviewCard;