import { products } from "../../conastant";
import PopularProductCard from "../PopularProductCard/PopularProductCard";


const PopularPoduct = () => {
    return (
       <section
       id="product"
       className="max-container max-sm:mt-12"
       >

        <div className=" flex flex-col justify-start gap-5">
         <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular </span>product</h2>
            <p className=" lg:max-w-lg mt-2 font-montserrat text-slate-gray"> Experience top-notch quality and style with our sought-after
            selections. Discover a world of comfort, design, and value</p>
             <div className=" mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  flex gap-14 sm:gap-4"> {
                products.map((product)=><PopularProductCard key={product.price} {...product}></PopularProductCard>)
            }</div>
            
            </div>
       </section>
    );
};

export default PopularPoduct;