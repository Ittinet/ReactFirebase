import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Shop from '../Shop'
import Login from '../Login'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Shop />
    },
    {
        path: '/login',
        element: <Login />
    }
], {
    basename: '/01ReactFirebase'
})


const AppRoutes = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default AppRoutes