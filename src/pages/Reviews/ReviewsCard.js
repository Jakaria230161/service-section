import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewsCard = ({ re, handelToDelete }) => {

    // const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({})

    const { _id, img, serviceName, review } = re;
    console.log(_id)
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>Review: {review}</p>
            </div>
            <div className="flex text-center mt-4 space-x-3 md:mt-6 ml-10">
                <button onClick={() => handelToDelete(_id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                <Link to={`/reviewedit/${_id}`} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Edit Review</Link>
            </div>
        </div>
    );
};

export default ReviewsCard;