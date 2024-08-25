import { useState } from "react";
import { arrowRight } from "../../assets/icons";
import { bigShoe1 } from "../../assets/images";
import { shoes, statistics } from "../../conastant";
import Button from "../Button/Button";
import ShoeCard from "../ShoeCard/ShoeCard";
import CountUp from 'react-countup';


const Hero = () => {
    const [bigShoe,setBigShoe]=useState(bigShoe1)
    return (
      <section id="home" className="w- flex xl:flex-row flex-col min-h-screen max-container justify-center gap-10">
<div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x  w-full pt-28 ">
<p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
<h1 className="mt-10 font-palanquin text-8xl max-sm:text-{72px}  max-sm:leading-{82} font-bold">
    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
    <br />
    <span className="text-coral-red inline-block mt-3" >NIKE </span>
     Shoes
</h1>
<p className="font-montserrat text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm ">Discover stylish nike arrival ,quality comfort and innovation for you active life</p>
<Button label='shop Now' iconURL={arrowRight} ></Button>
<div className="flex justify-start  items-start flex-wrap w-full mt-20 gap-16 ">
    
    {
        statistics.map((stat,ind) =>(
            <div key={ind}>
                    <p className="text-4xl font-palanquin font-bold"><CountUp  end={stat.value} />{stat.value==500?'+':'k+'}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                </div>
        ))
    }
</div>
</div>
 <div className="relative flex-1 flex justify-center items-center xl:min-h-screen
  max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
    <img src={bigShoe} alt="Shoes collection " width={610} height={500}
    className="object-contain relative z-10" />
 
 <div className="flex  sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
    {
        shoes.map((shoe,idx)=>(
            <div key={idx}>
            <ShoeCard imgUrl={shoe}
            ChangeShoe={(shoe)=>setBigShoe(shoe)}
            bigShoeImg={bigShoe}></ShoeCard>

            </div>
        ))
    }
 </div></div>
      </section>
    );
};

export default Hero;