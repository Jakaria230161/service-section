import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {

    const [services, setServices] = useState([]);

    const { loading } = useContext(AuthContext);

    useTitle('All Services');


    useEffect(() => {
        fetch('https://assignment11-server-side-iota.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold">My legal Service Areas</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AllServicesCard
                        key={service._id}
                        service={service}
                    ></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;