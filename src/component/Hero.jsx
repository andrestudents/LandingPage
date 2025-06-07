import img from "../assets/img.webp";
const Hero = () => {
    return (
        <div className="flex flex-col items-center shadow-sm shadow-white ">

            {/* title */}
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-8 px-4 ">
                <div className="flex flex-col items-center text-center max-w-xl">
                    <h1 className="text-2xl text-center sm:text-6xl lg:text-5xl tracking-wide ">
                        LANDING PAGE  <br />
                        BUILDERS FOR <br />
                        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                            {" "}
                            YOUR BUSINESS
                        </span>
                    </h1>
                    <div className="flex justify-center mt-6 space-x-4">
                        <a
                            href="#"
                            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
                        >
                            Start for free
                        </a>
                        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                            Documentation
                        </a>
                    </div>
                </div>

                <img className="rounded-lg w-full max-w-md border border-orange-700 shadow-sm shadow-orange-400" src={img} alt="img" />
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