import img from "../assets/img.webp";
import landing from "../assets/landing.mp4";
import file from "../assets/file.mp4";
const Hero = () => {
    return (
        <div className="flex flex-col items-center  ">

            {/* title */}
            <div className="w-full mt-10 px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* TEXT */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
                            LANDING PAGE <br />
                            BUILDERS FOR <br />
                            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                                YOUR BUSINESS
                            </span>
                        </h1>
                        <div className="flex justify-center lg:justify-start mt-6 space-x-4">
                            <a
                                href="#"
                                className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white font-semibold hover:-translate-y-1 "
                            >
                                Start for free
                            </a>
                            <a
                                href="#"
                                className="py-3 px-6 rounded-md border font-semibold hover:-translate-y-1 "
                            >
                                Documentation
                            </a>
                        </div>
                    </div>

                    {/* VIDEO */}
                    <div className="flex-1 w-full ">
                        <video
                            autoPlay
                            loop
                            muted
                            className="w-full h-auto rounded-lg border border-orange-700 
             shadow-[0_0_30px_rgba(255,255,200,0.7)] shadow-orange-400 mx-2 my-4"
                        >
                            <source src={file} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>



            {/* description */}
            {/* <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p> */}

            {/* button */}
            {/* <div className="flex justify-center my-10">
                <a
                    href="#"
                    className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
                >
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div> */}

            {/* video */}
            {/* <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
                >
                    <source src={video2} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

        </div>
    );
};

export default Hero;