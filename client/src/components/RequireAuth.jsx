// import { useLocation, Navigate, Outlet } from "react-router-dom"
// import useAuth from "../hooks/useAuth"

// const RequireAuth = ({allowedRoles}) => {
//     const {auth} = useAuth()
//     const location = useLocation()

//     return (
//         // give user access if logged in
//         auth?.roles?.find(role => allowedRoles?.includes(role)) 
//         ? <Outlet /> 
//         : <Navigate to="/login" state={{from: location}} replace/>
//     )
// }

// export default RequireAuth