import React from 'react';

const About = () => {
    return (
      <div className="hero min-h-screen bg-base-200 mt-5 rounded-xl mb-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Legal Analysis!</h1>
            <p className="py-6">
              The primary service rendered by a law firm is to advise clients
              (individuals or corporations) about their legal rights and
              responsibilities, and to represent clients in civil or criminal
              cases, business transactions, and other matters in which legal
              advice and other assistance are sought.
            </p>
            <button className="btn btn-primary">Let's See</button>
          </div>
        </div>
      </div>
    );
};

export default About;