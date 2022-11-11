import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import ReviewDetailsService from './ReviewDetailsService';


const DetailsServices = () => {
    const serviceDetails = useLoaderData()

    const { user } = useContext(AuthContext);

    const { _id, img, price, title, description } = serviceDetails;

    const [users, setUsers] = useState([]);
    const [depend, setDepend] = useState(false)
    console.log({ depend })


    useEffect(() => {
        fetch(`https://assignment11-server-side-iota.vercel.app/reviews/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            });
    }, []);

    useEffect(() => {
        fetch(`https://assignment11-server-side-iota.vercel.app/${_id}`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            });
    }, [depend]);






    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.imgURL.value;
        const email = user?.email || 'unregistered';
        const review = form.message.value;

        const addReview = {
            service: _id,
            serviceName: title,
            title: name,
            img,
            email,
            review
        }


        ///Create a review post
        fetch('https://assignment11-server-side-iota.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Add Service successfully')
                    // alert('Add Service successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


        ///Show a review post
        fetch("https://assignment11-server-side-iota.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data)
            });

        setDepend(!depend)


    }

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>

            </div>


            <div className='mx-4'>
                <h2 className="text-2xl my-4">Reviews: {title}</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        users?.map(service => <ReviewDetailsService key={service._id} service={service}></ReviewDetailsService>)
                    }
                </div>
            </div>

            {user?.email ? (
                <div className='mx-4 my-4'>
                    <Toaster />
                    <form onSubmit={handlePlaceOrder}>
                        <h2 className="text-4xl my-3">Please write a review</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-4'>
                            <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" required />
                            <input name="imgURL" type="text" placeholder="Image URL" className="input input-ghost w-full  input-bordered" />
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                        </div>
                        <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Please your Review" required></textarea>

                        <input className='btn btn-primary my-4' type="submit" value="Please Your Review" />
                    </form>
                </div>
            ) : (
                <Link to="/login">
                    <button className="btn btn-outline mx-4 my-4">Please login to add a review</button>
                </Link>
            )}
        </div>
    );
};

export default DetailsServices;