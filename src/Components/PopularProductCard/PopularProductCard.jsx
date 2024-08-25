
import { PropTypes } from 'prop-types';
const PopularProductCard = ({imaURL,price,name}) => {
   
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imaURL} alt={name} className='w-[280px] h-[280px]'/>
        </div>
    );
};
PopularProductCard.propTypes={
    imaURL: PropTypes.string,
    price: PropTypes.string,
    name:PropTypes.string
}

export default PopularProductCard;