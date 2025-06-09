import React from 'react'
import { features } from '../constant'

function Template() {
    return (
        <div className="p-4">
            {/* Badge Title */}
            <div className="text-center mb-8 bg-neutral-800 shadow-md">
                <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    TEMPLATE
                </span>
            </div>

            {/* Main Layout */}
            <div className="flex gap-6">
                {/* Sidebar List - 20% */}
                <div className="w-1/5 bg-neutral-100 p-4 rounded-md bg-neutral-100 p-4 rounded-md shadow-md text-center">
                    <h3 className="text-lg font-semibold mb-4 text-neutral-800">List Template</h3>
                    <ul className="space-y-2 text-neutral-700 space-y-5">
                        <li className="hover:text-orange-500 cursor-pointer">Dashboard</li>
                        <li className="hover:text-orange-500 cursor-pointer">Profile</li>
                        <li className="hover:text-orange-500 cursor-pointer">Settings</li>
                        <li className="hover:text-orange-500 cursor-pointer">Logout</li>
                    </ul>
                </div>

                {/* Feature Cards - 80% */}
                <div className="w-full bg-neutral-100 p-4 rounded-md shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4">
                                <div className="flex items-start">
                                    <div className="flex h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full mr-4">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h5 className="text-xl font-semibold mb-2 text-neutral-800 hover:text-orange-500 cursor-pointer">{feature.text}</h5>
                                        <p className="text-neutral-500 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Template
