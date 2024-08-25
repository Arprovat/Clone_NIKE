
import { PropTypes } from 'prop-types';

const ServiceCard = ({imgURL,label, subtext}) => {
    return (
        <div className='flex-1 px-10 py-16 shadow-3xl w-full rounded-md sm:w-[350px] sm:min-w-[350px]'>
            <div className='w-11 flex h-11 rounded-full justify-center items-center bg-coral-red'>
                <img src={imgURL} height={24} width={24} alt="" />
            </div>
            <h3 className='mt-5 leading-normal text-2xl font-montserrat font-semibold'>{label}</h3>
            <p className='mt-3 text-lg font-palanquin break-words leading-normal text-slate-gray'>{ subtext}</p>
        </div>
    );
};
ServiceCard.propTypes ={
    imgURL: PropTypes.string,
    label: PropTypes.string,
    subtext: PropTypes.string
}

export default ServiceCard;