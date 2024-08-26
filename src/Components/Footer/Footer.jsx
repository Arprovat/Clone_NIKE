import { copyrightSign } from "../../assets/icons";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../../conastant";

const Footer = () => {
    return (
        <div className="max-container">
            <div className="flex max-lg:flex-col gap-20 justify-between flex-wrap items-center ">
                <div className="flex mt-6 flex-col items-start sm:max-w-sm"><a href="/">
                    <img src={footerLogo} alt="FooterLogo" width={150} height={46} /></a>
                    <p className=" mt-6 text-base font-montserrat leading-7 text-white-400"> Get shoes ready for the new term at your nearest Nike store. Find
                    Your perfect Size In Store. Get Rewards</p>
                    <div className="flex items-center gap-8 mt-8">
                  {
                    socialMedia.map(icon => (
                        <div key={icon.alt} className="flex justify-center h-12 w-12 rounded-full bg-white items-center">
                            <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                            </div>
                    ))
                  }
                    </div>
                    </div>
                    
                <div className="flex flex-1 gap-20 flex-wrap lg:gap-10 justify-between">
                    {
                        footerLinks.map(section => (
                            <div key={section.title} className="">
                                 <h3 className="text-white lg:mt-8 font-montserrat text-xl font-medium leading-normal md-6 ">
                                {
                                    section.title
                                }
                                 </h3>
                                 <ul>
                                    {
                                        section.links.map(link =>
                                        <li key={link.name} className="text-white-400 mt-3 leading-normal font-palanquin text-base hover:text-slate-gray cursor-pointer"><a href={link.link}>{link.name}</a></li>
                                        )
                                    }
                                 </ul>
                            </div>
                        ))
                    }
                </div>

            </div>
<div className="flex justify-between max-sm:flex-col mt-24 max-sm:items-center text-white-400">
    <div className="flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer">
        <img src={copyrightSign} alt="copyright" width={20} height={20} className="object-contain rounded-full"/>
        <p>Copyright. All rights reserved.</p>
    </div>
    <div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
    </div>

</div>
        </div>
        
    );
};

export default Footer;