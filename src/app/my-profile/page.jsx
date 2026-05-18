import ProfileCard from '@/components/ui/ProfileCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyProfilePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    return (
        <div className='bg-gray-100 min-h-screen p-20'>
            <h1 className='text-4xl font-semibold'>My Profile</h1>
            <p className='opacity-70'>Manage your account settings and travel preferences.</p>

            <div className='grid grid-cols-3 gap-6 mt-8'>
                <div className='col-span-1'>
                    <ProfileCard user={user} />
                </div>
                <div className='col-span-2'>

                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;