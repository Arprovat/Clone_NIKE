import { IoIosStar } from "react-icons/io";
import { PropTypes } from 'prop-types';
const PopularProductCard = ({imgURL,price,name,rating}) => {
   
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]'/>

        <div className="mt-6 flex justify-start items-center">
            <IoIosStar className="text-3xl mr-2 text-coral-red"/>
            < p className="text-lg leading-normal text-slate-gray">({rating})</p>
           

        </div>
        <h2 className="mt-2 text-2xl font-semibold font-palanquin leading-normal">{name}</h2>
        <p className="mt-2 text-2xl font-montserrat leading-normal font-semibold text-coral-red ">{price}</p>

        <button className="rounded-xl mt-2 ml-[50%] justify-start bg-gradient-to-br from-[#FF416C] to-[#FF4B2B] px-5 py-3 text-base w-24 font-medium text-white transition duration-200 hover:shadow-lg  hover:shadow-[#FF416C]/50">
  BUY
</button>

        </div>
    );
};
PopularProductCard.propTypes={
    imgURL: PropTypes.string,
    price: PropTypes.string,
    name:PropTypes.string,
    rating:PropTypes.number,
}

export default PopularProductCard;