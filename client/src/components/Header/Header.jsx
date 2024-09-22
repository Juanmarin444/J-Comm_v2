import MobileNav from './MobileNav.jsx';
import Nav from './Nav.jsx';
import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const toggleMobileNav = () => {
        document.getElementById('mobileNavContainer').classList.toggle('invisible');
        document.getElementById('mobileNavBg').classList.toggle('opacity-0');
        document.getElementById('mobileNavBg').classList.toggle('opacity-50');
        document.getElementById('mobileNav').classList.toggle('translate-x-full');
    }
    return (
        <div className="sticky top-0 z-20">
            <div className="flex justify-between items-center py-5 px-5 sm:px-10 font-Rubik font-semibold bg-white dark:bg-neutral-950">
                <div className="w-3/4 sm:w-1/3">
                    <NavLink className="text-xl sm:text-2xl font-normal cursor-pointer hover:text-[#cca869]">J-COMM</NavLink>
                </div>
                <div className="hidden w-1/3 sm:flex justify-center">
                    <Nav className="w-1/3" />
                </div>
                <div className="hidden w-1/3 sm:flex justify-end">
                    <NavLink to="cart">
                        <ShoppingBagIcon className="w-7 h-7 cursor-pointer hover:text-[#cca869]" />
                    </NavLink>
                </div>
                <div className="flex justify-end w-1/4 sm:hidden">
                    <Bars3Icon onClick={toggleMobileNav} className="w-5 h-5 z-30"/>
                    <div id="mobileNavContainer" className="font-Rubik font-semibold fixed inset-0 w-full h-full z-20 invisible">
                        <div id="mobileNavBg" onClick={toggleMobileNav} className="w-full h-full duration-500 ease-out transition-all top-[68px] absolute bg-gray-900 opacity-0"></div>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
