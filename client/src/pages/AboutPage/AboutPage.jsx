import blackRock from "../../assets/AboutImages/black_rock.avif";
import futureStairs from "../../assets/AboutImages/futuristic_stairs.jpg";
import sleekDesk from "../../assets/AboutImages/sleek_desk.jpg";

const AboutPage = () => {
    return (
        <div className="pb-12">
            <div className="about-page-header-text py-12 text-center">
                <h1 className="text-page-h1 font-bold font-Roboto">About Us</h1>
                <p className="text-page-p font-Roboto">At J-COMM, we bring creativity and expertise to every project, transforming ideas into seamless digital solutions.</p>
            </div>
            <div className="about-container flex flex-col gap-8 px-4">
                <div className="col flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                    <img className="w-96" src={sleekDesk} alt="temporary alt text"/>
                    <div className="">
                        <h3 className="font-bold 2xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">Our Journey</h3>
                        <p className="2xl:text-2xl lg:text-xl md:text-lg sm:text-base">Joshua Castillo and Juan Marin started J-COMM with a shared vision: to build exceptional digital experiences that blend creativity and functionality. With backgrounds in tech and a passion for solving complex problems, they bring a hands-on approach to every project, transforming ideas into reality with precision and care.</p>
                    </div>
                </div>
                <div className="col flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                    <img className="w-96" src={blackRock} alt="temporary alt text"/>
                    <div className="">
                        <h3 className="font-bold 2xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">Our Tools</h3>
                        <p className="2xl:text-2xl lg:text-xl md:text-lg sm:text-base">J-COMM runs on the powerful MERN stack—MongoDB, Express, React, and Node. By leveraging modern technologies, we create efficient, scalable, and responsive platforms. Our custom-built database ensures that every interaction is seamless and designed with user experience in mind.</p>
                    </div>
                </div>
                <div className="col flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                    <img className="w-96" src={futureStairs} alt="temporary alt text"/>
                    <div className="">
                        <h3 className="font-bold 2xl:text-3xl lg:text-2xl md:text-xl sm:text-lg">Our Vision</h3>
                        <p className="2xl:text-2xl lg:text-xl md:text-lg sm:text-base">We’re constantly evolving, just like the digital landscape. Our vision is to stay ahead of the curve by adopting cutting-edge technologies and pushing the boundaries of what’s possible. At J-COMM, we’re not just building websites—we’re shaping the future of e-commerce.</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default AboutPage;