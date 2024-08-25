import PropTypes from 'prop-types';

const Button = ({label,iconURL,bg_color,text_color,border}) => {
    return (
       
        <button
        className={`flex justify-center items-center gap-2 px-7 py-4  font-montserrat text-lg leading-none border-2
        ${
          bg_color
            ? ` bg-${bg_color} ${text_color} ${border}`
            : "bg-coral-red text-white border-coral-red "
        } rounded-full hover:shadow-3xl font-semibold hover:${bg_color?"shadow-slate-gray":"shadow-coral-red"}`}
      >
             {label}
           {iconURL &&  <img className='ml-2 rounded-full w-5 h-5 ' src={iconURL} alt="arrow right icon" />}
            </button>
    );
};
Button.propTypes = {
    label: PropTypes.string.isRequired,
    iconURL: PropTypes.string,
    bg_color: PropTypes.string,
    border: PropTypes.string,
    text_color: PropTypes.string
}

export default Button;