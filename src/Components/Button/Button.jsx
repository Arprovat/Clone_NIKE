import PropTypes from 'prop-types';

const Button = ({label,iconURL}) => {
    return (
       
            <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-normal bg-coral-red rounded-full font-semibold hover:shadow-lg hover:shadow-slate-300
            text-white border-coral-red
            active:bg-red-500">
             {label}
             <img className='ml-2 rounded-full w-5 h-5 ' src={iconURL} alt="arrow right icon" />
            </button>
    );
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    iconURL: PropTypes.string
}

export default Button;