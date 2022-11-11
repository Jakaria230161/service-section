import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    let navigate = useNavigate();
    let location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)

                const currentUser = {
                    email: user.email,
                }
                console.log(currentUser);

                // //JWT Token
                fetch('https://assignment11-server-side-iota.vercel.app/jwt',
                    {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(currentUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        //local storage token set
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .then(error => console.error(error))
    }

    return (
      <div>
        <p className="text-center">
          {" "}
          <small>
            <span className=' py-2 px-4 text-white font-semibold bg-red-500 border rounded-lg'>Login with Google</span>
          </small>{" "}
        </p>
        <p onClick={handleGoogleSignIn} className="text-center">
          {" "}
          <button className="btn btn-ghost">
            <FcGoogle className="h-8 w-8"></FcGoogle>
          </button>{" "}
        </p>
      </div>
    );
};

export default SocialLogin;