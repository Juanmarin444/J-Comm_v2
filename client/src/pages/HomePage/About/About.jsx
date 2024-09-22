import culture from '../../../assets/AboutImages/the-big-notorious.avif';
import techStack from '../../../assets/AboutImages/skylight.avif';
import theVision from '../../../assets/AboutImages/tall-teapot.avif';
import Button from "../../../components/Button/Button";

const About = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="pt-5 sm:py-5 md:py-8 lg:py-10 xl:py-12 2xl:py-14">
                <p className="font-Roboto font-bold text-hero-p text-center">Where&nbsp;Technology Meets&nbsp;Simplicity.</p>
            </div>
            <div className="flex flex-col gap-5 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 p-5 sm:flex-row sm:p-0">
                <div className="flex-1">
                    <img src={culture} alt="The Big Notorious - Biggie Smalls"/>
                    <h3 className="font-Roboto xl:text-2xl 2xl:text-3xl">Culture</h3>
                    <p className="font-Rubik xl:text-lg 2xl:text-xl">Joshua Castillo and Juan Marin are more than developers—they're creators driven by curiosity and passion. Their goal? To make technology more approachable, while bringing a mix of creativity, dedication, and a dash of fun to every project.</p>
                </div>
                <div className="flex-1">
                    <img src={techStack} alt="Inside a tall building with a skylight"/>
                    <h3 className="font-Roboto xl:text-2xl 2xl:text-3xl">Tech-Stack</h3>
                    <p className="font-Rubik xl:text-lg 2xl:text-xl">J-COMM is built on the MERN stack: MongoDB, Express, React, and Node. We use React for the front-end and Redux for seamless state management, while connecting to our own database to deliver a smooth and dynamic shopping experience.</p>
                </div>
                <div className="flex-1">
                    <img src={theVision} alt="A tall white teapot."/>
                    <h3 className="font-Roboto xl:text-2xl 2xl:text-3xl">Vision</h3>
                    <p className="font-Rubik xl:text-lg 2xl:text-xl">Joshua Castillo and Juan Marin blend simplicity with innovation. Like the design of a timeless teapot, they create elegant, user-friendly solutions that exceed expectations, making technology intuitive and seamless for everyone.</p>
                </div>
            </div>
            <Button path="about" text="OUR TEAM" />
        </div>
    );
}

export default About;