import React, { useContext } from 'react'
import Nav from './Nav'
import SidebarPro from './SidebarPro'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from '../../pages/Login';
import { useDispatch, useSelector } from 'react-redux'
import { getUserError, getUserStatus, getUserToken, sessionOut } from "../../store/slices/userSlice"
import Dashboard from '../../pages/Dashboard';
import Userlist from '../../pages/UserList';
import TermsAndConditions from '../../pages/TermsAndConditions';
import PrivacyPolicy from '../../pages/PrivacyPolicy';
import Spinner from '../Spinner';
import { context } from '../../context/context';
import AllEvents from '../../pages/AllEvents';

const Layout = () => {
    const { isLoading } = useContext(context);
    const status = useSelector(getUserStatus)
    const authToken = useSelector(getUserToken)
    const error = useSelector(getUserError)
    const dispatch = useDispatch()
    if (error == 401) {
        dispatch(sessionOut())
        localStorage.clear();
    }
    return (
        <>
            {status == 'loading' || isLoading ? <Spinner /> : <></>}
            <div className={!authToken ? "" : "wrapper"}>
                <BrowserRouter>
                    {authToken && error != 401 ? <>
                        <SidebarPro />
                        <div style={{ width: "100%" }}>
                            <Nav />
                            <Routes>
                                <Route path="*" element={<Navigate to="/admin/dashboard" />} />
                                <Route path="/admin/dashboard" exact element={<Dashboard />} />
                                <Route path="/admin/event-list" exact element={<AllEvents />} />
                                <Route path="/admin/user-list" exact element={<Userlist />} />
                                <Route path="/admin/terms-and-conditions" exact element={<TermsAndConditions />} />
                                <Route path="/admin/privacy-policy" exact element={<PrivacyPolicy />} />
                            </Routes>
                        </div>
                    </> :
                        <>
                            <Routes>
                                <Route path="*" element={<Navigate to="/admin/" />} />
                                <Route path="/admin/" exact element={<Login />} />
                            </Routes>
                        </>
                    }
                </BrowserRouter>
            </div>
        </>
    )
}

export default Layout