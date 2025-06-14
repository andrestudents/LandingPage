import { pricings } from "../constant";
import { CheckCircle2 } from "lucide-react";


const Pricing = () => {

    return (
        <section
            id="pricing">

            <div className="mt-30">

                {/* Badge Title */}
                <div className="text-center mb-8 ">
                    <span className=" text-orange-500 rounded-full h-6 text-xl font-medium px-2 py-1 uppercase ">
                        PRICING
                    </span>
                </div>
                {/* Card */}
                <div className="flex flex-wrap">
                    {pricings.map((option, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                            <div className="p-10 border border-neutral-700 rounded-xl">
                                <p className="text-4xl mb-8">
                                    {option.title}
                                    {option.title === "Pro" && (
                                        <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                                            (Most Popular)
                                        </span>
                                    )}
                                </p>
                                <p className="mb-8">
                                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                                    <span className="text-neutral-400 tracking-tight">/Month</span>
                                </p>
                                <ul>
                                    {option.features.map((feature, index) => (
                                        <li key={index} className="mt-8 flex items-center">
                                            <CheckCircle2 />
                                            <span className="ml-2">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                                >
                                    Subscribe
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Pricing;

