import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center flex-col font-Roboto text-base w-10/12 border-t-[1px] border-[#b3b3b3] my-0 mx-auto">
            <Link className="py-5 font-Rubik text-2xl">J-COMM</Link>
            <div className="flex flex-wrap justify-center gap-4 items-center font-Rubik font-semibold p-4">
                <Link className="text-center">Home</Link>
                <Link className="text-center" to="shop">Shop</Link>
                <Link className="text-center" to="reviews">Reviews</Link>
                <Link className="text-center" to="about">About</Link>
                <Link className="text-center" to="cart">Your Cart</Link>
            </div>
            <p className="py-5 text-center">@J-COMM. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;