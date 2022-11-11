import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewsCard from './ReviewsCard';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    // console.log(reviews)

    useTitle('Reviews')

    useEffect(() => {
        if (!user?.email) {
            return;
        }
        fetch(`https://service-review-server-omega.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`

            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut]);


    //review delete

    const handelToDelete = (id) => {
        const proceed = window.confirm('are you sure, ou want to delete to this order');
        if (proceed) {
            fetch(`https://service-review-server-omega.vercel.app/delete/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully.');
                        const remainingOrder = reviews.filter(order => order._id !== id);
                        console.log(remainingOrder);
                        setReviews(remainingOrder);
                    }
                });

        }
    }

    return (
        <div className='mx-4 my-4'>
            <Toaster />
            <div className='text-center my-4'>
                <h2 className="text-5xl font-semibold">My Reviews</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews?.map(re => <ReviewsCard
                        key={re._id}
                        re={re}
                        handelToDelete={handelToDelete}
                    ></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;