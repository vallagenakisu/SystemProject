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
import NewsFeed from './Components/FeedPage/NewsFeed';
import PostCard from './Components/EmployeeDashBoard/PostCard.jsx'
import Profiles from './Components/Profiles/Profiles.jsx';
const router = createBrowserRouter([
    {
        path : '/' ,
        element: <DeafualyLayout/>,
        children : [
            {
                path : '/dashboard' ,
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

                    {
                        path:'newsfeed',
                        element:<NewsFeed/>
                    },
                    {
                        path:'postFeed',
                        element:<PostCard/>
                    },
                    {
                        path:'profile/:id', // Using dynamic routing for showing every profile
                        element: <Profiles/>
                    },
                    
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
                path : '/landing' ,
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
            
        ]
    }
])
export default router;