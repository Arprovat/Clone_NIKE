import { services } from "../../conastant";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    return (
        <div className="flex flex-wrap max-container gap-9 justify-center">
            {
           services.map(service=> <ServiceCard key={service.label} {...service} /> )
                
            }
        </div>
    );
};

export default Services;