import DestinationCard from '@/components/ui/DestinationCard';
import React from 'react';

const DestinationPage = async () => {

    const res = await fetch("http://localhost:5000/destinations");
    const destinations = await res.json();

    return (
        <div className='container mx-auto my-12'>
            <h1 className='text-4xl font-bold mb-2'>Explore All Destinations</h1>
            <h3 className='text-lg text-gray-600'>Find your perfect travel experience from our curated collection</h3>
            <p className='opacity-50 my-4'><small>Showing {destinations.length} destinations</small></p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {destinations.map(dest => <DestinationCard key={dest._id} destination={dest} />)}
            </div>
        </div>
    );
};

export default DestinationPage;