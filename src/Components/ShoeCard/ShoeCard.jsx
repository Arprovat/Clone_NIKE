
import { PropTypes } from 'prop-types';

const ShoeCard = ({imgUrl ,ChangeShoe,bigShoeImg}) => {
  const  handleClick =() => {
        if(bigShoeImg !== imgUrl.bigShoe)
            ChangeShoe(imgUrl.bigShoe);
    }
    return (
        <div className={`border-2 rounded-xl  
    ${bigShoeImg==imgUrl?'border-coral-red': 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `} onClick={handleClick}>
        <div className='flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40  rounded-xl max-sm:p-4 '><img src={imgUrl.thumbnail} 
             alt='shoe collection'
             width={127}
             height={103}
             className='object-con'
             /></div>
             
        </div>
    );
};
ShoeCard.propTypes ={
    imgUrl: PropTypes.string.isRequired,
    ChangeShoe: PropTypes.func,
    bigShoeImg: PropTypes.string

}
export default ShoeCard;