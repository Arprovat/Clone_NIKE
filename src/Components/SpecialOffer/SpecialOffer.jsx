import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import Button from "../Button/Button";
const SpecialOffer = () => {
    return (
        
            <div className="flex justify-wrap items-center w-full max-xl:flex-col-reverse gap-10 max-container">
                <div className="flex-1">
                    <img src={offer} height={687} width={773} alt="offer" className="object-contain w-full" />
                </div>
            <div className="flex flex-col flex-1">
<h1 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
   <span className="text-coral-red " >Super</span> Offer
</h1>
<p className="mt-4 info-text lg:max-w-lg "> Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 info-text lg:max-w-lg"> Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Shop Now' iconURL={arrowRight}  ></Button>
     <Button label="Laren More " bg_color='white' border='border-slate-gry' text_color="text-slate-gray"/>
          </div>
            </div></div>
        
    );
};

export default SpecialOffer;