import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex justify-evenly w-full lg:text-base xl:text-lg 2xl:text-xl">
      <li>
        <NavLink className="cursor-pointer hover:text-[#cca869]" to='shop'>Shop</NavLink>
      </li>
      <li>
        <NavLink className="cursor-pointer hover:text-[#cca869]" to="reviews">Reviews</NavLink>
      </li>
      <li>
        <NavLink className="cursor-pointer hover:text-[#cca869]" to="about">About</NavLink>
      </li>
    </ul>
  )
}

export default Nav;
