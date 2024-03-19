import React from 'react'
import NavBar from '../components/NavBar.jsx'
import locationImage from '../assets/location.png'

const LocationAccess = () => {
    return (
        <div>
            <NavBar />

            <div className='flex flex-col justify-center items-center gap-4'>
                <img className='mt-20 shadow-2xl rounded-[50%]' width={300} src={locationImage} alt="location-access" />
                <h2 className='font-bold text-3xl'>Location</h2>
                <p className='font-[400] text-[.9rem] text-center'>Your location services are switched off. Please enable location to help us serve better.</p>
                <button className='bg-blue-700 text-white py-2 px-7 rounded-md hover:bg-blue-800 transition-all font-semibold shadow-md'>Allow Location Access</button>
                <button className='text-blue-600 border-[1px] bg-gray-200 border-gray-400 font-semibold py-2 px-7 rounded-md shadow-md'>Enter location manually</button>
            </div>
        </div>
    )
}

export default LocationAccess
