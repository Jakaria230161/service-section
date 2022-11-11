import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import EditReviews from "../pages/Reviews/EditReviews";
import Reviews from "../pages/Reviews/Reviews";
import AddServices from "../pages/Services/AddServices";
import AllServices from "../pages/Services/AllServices";
import DetailsServices from "../pages/Services/DetailsServices";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/services",
                element: <AllServices></AllServices>,
            },
            {
                path: '/services/:id',
                element: <DetailsServices></DetailsServices>,
                loader: ({ params }) => fetch(`https://assignment11-server-side-iota.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addServices',
                element: <PrivateRouter><AddServices></AddServices></PrivateRouter>
            },
            {
                path: '/reviews',
                element: <PrivateRouter><Reviews></Reviews></PrivateRouter>
            },
            {
                path: '/reviewedit/:id',
                element: <EditReviews></EditReviews>,
                loader: ({ params }) => fetch(`https://service-review-server-omega.vercel.app/review/${params.id}`),
            },

        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);