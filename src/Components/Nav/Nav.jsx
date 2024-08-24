import { headerLogo } from "../../assets/images";
import { navLinks } from "../../conastant";
import { hamburger } from "../../assets/icons";

const Nav = () => {
    return (
        <header className="padding-x py-8 w-full absolute z-10 bg-slate-100">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} width={129} height={29
                    } alt="Header logo" className="m-0 h-[29px] w-[129px]" /></a>

                <ul className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
                    {
                        navLinks.map(nav => (<li key={nav.label}>
                            <a className='font-montserrat text-lg leading-normal hover:underline text-slate-gray focus:outline-none focus:ring focus:ring-violet-300 focus:rounded-md' href={nav.href}>{nav.label}</a>
                        </li>))
                    }
                </ul>
                <div className="flex gap-1 pr-8 items-center justify-center">
                    <input className=" border-2 border-indigo-300 rounded-md focus:ring focus:ring-violet-200" type="text" />
                    <input className='text-lg ' type="button" value="Search" />

                </div>
                <div className="flex gap-2 font-semibold leading-normal text-lg font-montserrat text-slate-gray max-lg:hidden wide:mr-20">
                    <a href="/">sign Up</a>
                    <span>/</span>
                    <a href="/">Login</a>
                </div>
                <div className=" hidden max-lg:block">
                    <a href="">
                        <img src={hamburger} width={25} height={25} alt="icon" />
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Nav;