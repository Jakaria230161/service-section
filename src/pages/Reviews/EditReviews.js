import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const EditReviews = () => {

    const data = useLoaderData();
    console.log(data)
    const Navigate = useNavigate()

    const HandelToEditReview = (e) => {
        e.preventDefault();

        const review = e.target.review.value;

        const details = {
            review: review,
        }


        fetch(`https://service-review-server-omega.vercel.app/review/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(details),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('your information is successful updated');
                    Navigate('/reviews');
                }
            });

    }


    return (
        <div className='w-3/4 m-auto'>
            <Toaster />
            {/* <form className="card-body" onSubmit={HandelToEditReview}>
                <h1 className="text-5xl font-bold text-[#ff3911] text-center my-5">Add New Review </h1>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Edit Reviews</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-60" defaultValue={data?.review} name="review" placeholder="Edit Reviews" required ></textarea>
                </div>

                <div className="form-control">


                </div>

                <div className="form-control mt-4">
                    <input
                        className="
                bg-[#ff3811]
                 text-white 
                 border-2 
                 rounded-md 
                 py-2 
                 border-[#ff3811] 
                 font-semibold 
                 hover:bg-[#ffffff34] 
                 hover:text-[#ff3811]" type="submit" value="Confirm" />
                </div>
            </form> */}
            <form onSubmit={HandelToEditReview}>
                <h2 className="text-4xl my-4">Edit Your Review</h2>
                <textarea name="review" defaultValue={data?.review} className="textarea textarea-bordered h-24 w-full my-4" placeholder="Edit Reviews" required></textarea>

                <input className='btn btn-primary mb-4' type="submit" value="Update New Review" />
            </form>


        </div>
    );
};

export default EditReviews;