import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../layout/Dashboard";
import PrivetRoute from "./PrivetRoute";
import ManageUser from "../pages/admin/ManageUser";
import AddAClass from "../pages/instructor/AddAClass";
import AdminRoute from "./AdminRoute";
import MyClasses from "../pages/instructor/MyClasses";
import ManageClasses from "../pages/admin/ManageClasses";
import Error from "../pages/error/Error";
import Instructors from "../pages/allInstructors/Instructors";
import AllClasses from "../pages/allClasses/AllClasses";
import MySelectedClass from "../pages/studentDashboard/selectClass/MySelectedClass";
import Payment from "../pages/studentDashboard/payment/Payment";
import EnrolledClass from "../pages/studentDashboard/enrolled/EnrolledClass";
import Feedback from "../pages/cards/Feedback";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/all-classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
        children:[
            {
                path: '/dashboard/manage-users',
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path: '/dashboard/manage-classes',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: '/dashboard/add-class',
                element: <AddAClass></AddAClass>
            },
            {
                path: '/dashboard/my-classes',
                element: <MyClasses></MyClasses>
            },
            {
                path: '/dashboard/my-selected-class',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: '/dashboard/payment/:price/:id',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/enrolled',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: '/dashboard/feedback/:email',
                element: <Feedback></Feedback>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
export default router;