import { shoe8 } from "../../assets/images";
import Button from "../Button/Button";


const SuperQuality = () => {
    return (
        <div className="flex justify-between items-center w-full max-lg:flex-col gap-10 max-container">
            <div className="flex flex-col flex-1">
<h1 className="mt-10 font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 ">We Provide You </span><span className="text-coral-red " >Super</span>
    <br/>
    <span className="text-coral-red inline-block mt-3" >Quality </span> Shoes
</h1>
<p className="mt-4 info-text lg:max-w-lg "> Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.</p>
          <p className="mt-6 info-text lg:max-w-lg"> Our dedication to detail and excellence ensures your satisfaction</p>
          <div className="mt-11">
            <Button label='View Details'  ></Button>
          </div>
            </div>
            <div className="flex flex-1 justify-center items-center ">
                <img src={shoe8} alt="" width={570} height={522} className="object-contain"/>
            </div>
        </div>
    );
};

export default SuperQuality;