import React from 'react';
import { PaperPlane, Globe, ArrowUpRight, Tag } from "@gravity-ui/icons";

const TravelStatistics = ({ stats }) => {
    const { 
        totalBookings = 0, 
        countriesVisited = 0, 
        upcomingTrips = 0, 
        totalSpent = 0 
    } = stats || {};

    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 mb-5">Travel Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Total Bookings Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
                        <h3 className="text-3xl font-semibold text-gray-900">{totalBookings}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500">
                        <PaperPlane className="w-6 h-6" />
                    </div>
                </div>

                {/* Countries Visited Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Countries Visited</p>
                        <h3 className="text-3xl font-semibold text-gray-900">{countriesVisited}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                        <Globe className="w-6 h-6" />
                    </div>
                </div>

                {/* Upcoming Trips Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Upcoming Trips</p>
                        <h3 className="text-3xl font-semibold text-gray-900">{upcomingTrips}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-400">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>

                {/* Total Spent Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Spent</p>
                        <h3 className="text-3xl font-semibold text-gray-900">
                            ${totalSpent.toLocaleString()}
                        </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-fuchsia-50 flex items-center justify-center text-fuchsia-500">
                        <Tag className="w-6 h-6" /> 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TravelStatistics;