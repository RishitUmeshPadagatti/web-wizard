import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function encodeWithPlus(str) {
    return (str || '').replace(/ /g, '+');
  }

export const Business = () => {
    const { id } = useParams();
    const [business, setBusiness] = useState({})

    useEffect(() => {
        const doFunction = async () => {
            const res = await fetch(`http://localhost:3000/business/?id=${id}`)
            const data = await res.json()
            setBusiness(data)
        }

        doFunction()
    }, [])

    console.log(business);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Landscape Image - Full width */}
            <div className="w-full h-96">
                <img
                    src={business.landscapePicture}
                    alt="Business Landscape"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Business Info Section */}
                    <div className="p-6">
                        <div className="flex flex-col items-center">
                            {/* Profile Picture */}
                            <div>
                                <img
                                    src={business.profilePicture}
                                    alt="Business Profile"
                                    className="w-32 h-32 rounded-lg border-4 border-white shadow-lg object-cover"
                                />
                            </div>

                            {/* Business Info */}
                            <div className="mt-4 text-center">
                                <h1 className="text-3xl font-bold text-gray-900">{business.name}</h1>
                                <p className="text-gray-600 mt-1">{business.type}</p>
                            </div>

                            {/* Contact Information */}
                            <div className="mt-8 flex gap-8 flex-wrap justify-center">
                                <div className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>{business.phone}</span>
                                </div>
                                <div className="flex items-center text-gray-700">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>{business.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Section */}
                    {
                        business.name ? (<div className="w-full h-[500px] overflow-hidden">
                        <div className="w-full h-full">
                            <iframe
                                className="w-full h-full border-0"
                                frameBorder="0"
                                src={`https://www.google.com/maps/embed/v1/search?q=${encodeWithPlus(business.name)}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>) : (<div></div>)
                    }
                    
                </div>
            </div>
        </div>
    );
}