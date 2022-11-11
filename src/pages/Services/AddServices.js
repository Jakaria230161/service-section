import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    const { user } = useContext(AuthContext);

    useTitle('Service')

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.imgURL.value;
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const description = form.message.value;

        const addService = {
            title: name,
            img,
            email,
            price,
            description,
            time: new Date().getTime()
        }

        fetch('https://assignment11-server-side-iota.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
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

    }

    return (
        <div>
            <Toaster />
            <form onSubmit={handlePlaceOrder}>
                <h2 className="text-4xl my-4">Add Service</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="name" type="text" placeholder="Service Title" className="input input-ghost w-full  input-bordered" />
                    <input name="imgURL" type="text" placeholder="Service Image URL" className="input input-ghost w-full  input-bordered" />
                    <input name="price" type="text" placeholder="Service Price" className="input input-ghost w-full  input-bordered" required />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-4" placeholder="Service Description" required></textarea>

                <input className='btn btn-primary mb-4' type="submit" value="Add your Service" />
            </form>
        </div>
    );
};

export default AddServices;