import React from 'react'
import { pictures } from '../constant'

function Template() {
    return (
        <section id='template'>
            <div className=" mt-30 p-4">
                {/* Badge Title */}
                <div className="text-center mb-8 ">
                    <span className=" text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                        TEMPLATE
                    </span>
                </div>

                {/* Main Layout */}
                <div className="flex gap-6 ">
                    {/* Sidebar List - 20% bg-neutral-100*/}
                    <div className="w-1/5  p-4 rounded-md  p-4 rounded-md shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-4 text-white-800">List Template</h3>
                        <ul className="space-y-2 text-white-700 space-y-5">
                            <li className="hover:text-orange-500 cursor-pointer">Digital</li>
                            <li className="hover:text-orange-500 cursor-pointer">Fashion</li>
                            <li className="hover:text-orange-500 cursor-pointer">Agribisnis</li>
                            <li className="hover:text-orange-500 cursor-pointer">Aksesoris</li>
                            <li className="hover:text-orange-500 cursor-pointer">Kuliner</li>
                            <li className="hover:text-orange-500 cursor-pointer">Jasa</li>
                        </ul>
                    </div>

                    {/* Feature Cards - 80% bg-neutral-100*/}
                    <div className="w-full  p-4 rounded-md shadow-md">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pictures.map((picture, index) => (
                                <div key={index} class="w-64 h-64 overflow-hidden group relative shadow-md hover:shadow-2xl">
                                    <a href="#" >
                                        <img
                                            src={picture.img}
                                            alt="Scroll image"
                                            class="transform group-hover:translate-y-[-50%] transition-transform duration-[3000ms] ease-in-out"
                                        />
                                    </a>
                                </div>
                            ))}



                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Template
