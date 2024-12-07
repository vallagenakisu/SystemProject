import { createBrowserRouter } from 'react-router-dom';
import DeafualyLayout from './Layouts/DeafualyLayout';
import Login from './views/Login';
import SignUp from './views/SignUp';
import GuestLayout from './Layouts/GuestLayout';
import LandingPage from './views/LandingPage';
import Dashboard from './views/Dashboard';

const router = createBrowserRouter([
    {
        path : '/' ,
        element: <DeafualyLayout />,
        children : [
            {
                path : '/dashboard' ,
                element : <Dashboard/>
            }
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
                path : 'signup' ,
                element : <SignUp/>
            }
        ]
    }
])
export default router;