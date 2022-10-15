import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoutes = ({component: Component, allowedRoles,  ...rest }) => {
    // console.log(allowedRoles)
    const Etoken = localStorage.getItem('Etoken')
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    console.log(userInfo)
    const roles = allowedRoles?.find(el => el === userInfo?.isAdmin)
    console.log(roles)
    // console.log(Etoken)
  return (
    <Route {...rest} render={(props) => Etoken ? <Component {...props}/> :   <Redirect to="/login" />} /> 
  )
}
// UnAuthorized
export default ProtectedRoutes