import { NavLink } from "react-router-dom";

const MobileNav = () => {
    return (
        <div id="mobileNav" className="absolute bg-white dark:bg-neutral-950 right-0 top-[68px] w-[33vw] duration-300 ease-out transition-all translate-x-full min-w-40 h-screen">

            <div className="flex flex-col justify-evenly w-full">
                <div className="py-5 pl-5">
                    <NavLink className="cursor-pointer hover:text-[#cca869]" to='shop'>Shop</NavLink>
                </div>
                <div className="py-5 pl-5">
                    <NavLink className="cursor-pointer hover:text-[#cca869]" to='reviews'>Reviews</NavLink>
                </div>
                <div className="py-5 pl-5">
                    <NavLink className="cursor-pointer hover:text-[#cca869]" to='about'>About</NavLink>
                </div>
                <div className="py-5 pl-5">
                    <NavLink className="cursor-pointer hover:text-[#cca869]" to='cart'>Cart</NavLink>
                </div>
            </div>
        </div>
    );
}

export default MobileNav