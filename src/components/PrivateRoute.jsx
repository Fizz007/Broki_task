import React, { useContext } from 'react'
import { userCont } from './UseContext/Userauth'
import { Navigate, Outlet } from 'react-router-dom'
import { toast } from 'react-hot-toast'

function PrivateRoute() {
    const {islogin} = useContext(userCont)
   
    if(!islogin && localStorage.getItem('user') === null){
         toast.error("Don't bypass the Routes")
        return <Navigate to='/'/>
        
    }else{
        return <Outlet/>
    }
}

export default PrivateRoute
