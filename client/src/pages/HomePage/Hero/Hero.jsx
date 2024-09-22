import heroImageDesktop from "../../../assets/HeroImages/hero-image.jpg";
import heroImageMobile from "../../../assets/HeroImages/mada.jpg";
import Button from "../../../components/Button/Button";

const Hero = () => {
    return (
        <div className="relative w-full max-w-[1900px]">
            <div className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col items-center w-11/12">
                <h1 className="text-hero-h1 font-Roboto font-bold">Find what you need with the touch of a button.</h1>
                <p className="text-hero-p font-Roboto">Finally, enjoy convenience&nbsp;without compromise.</p>
                <Button path="shop" text="SHOP NOW" />
            </div>
            <div className="">
                <img className="hidden sm:block" src={heroImageDesktop} alt="person wearing a white dress shirt and watch" />
                <img className="sm:hidden" src={heroImageMobile} alt="pretty lady" />
            </div>
        </div>
    );
}

export default Hero;