import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment11-server-side-iota.vercel.app/servicesHome')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
      <div className="mb-20 mt-12">
        <div>
          <div className="text-center mb-4">
            <p className="text-2xl font-bold text-orange-600">
              WHAT WE ARE EXPERT AT
            </p>
            <h2 className="text-5xl mb-4 font-semibold">Legal Practice Areas</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river.{" "}
            </p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
          </div>
          <div className="text-center mb-4">
            <Link to="/services">
              <button className="btn btn-outline btn-primary mt-6">
                See All
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Service;