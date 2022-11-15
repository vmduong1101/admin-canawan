import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Layout from '../layout/master-layout'
import Login from '../modules/auth/components/login'
import Error404 from '../modules/errors/components/error-404'
import Profile from '../modules/profile'



type Props = {}

const AppRoutes = (props: Props) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<Navigate to='/404' />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/404' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes