import { createBrowserRouter } from 'react-router-dom';
import DeafualyLayout from './Layouts/DeafualyLayout';
import Login from './views/Login';
import SignUp from './views/SignUp';
import GuestLayout from './Layouts/GuestLayout';
import LandingPage from './views/LandingPage';
import EmployeeDashBoard from './views/EmployeeDashBoard';
import DashProfile from './Components/EmployeeDashBoard/DashProfile';
import DashNotofications from './Components/EmployeeDashBoard/DashNotofications';
import Widgets from './Components/EmployeeDashBoard/Widgets';
import FeedPage from './views/FeedPage';
const router = createBrowserRouter([
    {
        path : '/' ,
        element: <DeafualyLayout />,
        children : [
            {
                path : 'dashboard' ,
                element : <EmployeeDashBoard/>,
                children:[
                    {
                        path: 'widgets' ,
                        element : <Widgets/>
                    },
                    {
                        path : 'dashprofile' ,
                        element : <DashProfile/>
                    },
                    {
                        path: 'dashnotifications',
                        element : <DashNotofications/>

                    },
                    // {
                    //     path:'feed',
                    //     element: <FeedPage/>
                    // }
                ]
            },
            
        ]
    }
    ,
    {
        path : '/' ,
        element: <GuestLayout/> ,
        children : [
            {
                path : '/Landing' ,
                element : <LandingPage/>
            }
            ,
            {
                path : '/login' ,
                element : <Login/>
            },
            {
                path : '/signup' ,
                element : <SignUp/>
            },
            {
                path:'feed',
                element: <FeedPage/>
            }
        ]
    }
])
export default router;