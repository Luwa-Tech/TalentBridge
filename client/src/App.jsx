import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ResetPassword from "./pages/ResetPassword"
import ForgotPassword from "./pages/ForgotPassword"
import UserDashBoard from "./pages/UserDashBoard"
import PostAJob from "./pages/PostAJob"
import VerifyEmail from "./pages/verifyEmail"
import FindJobs from "./pages/FindJobs"
import AboutUs from "./pages/AboutUs"
import Unauthorized from "./pages/Unauthorized"
import ProtectedRoutes from "./components/ProtectedRoutes"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search-jobs" element={<FindJobs />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<ProtectedRoutes allowedRoles={["admin", "employer"]}/>}>
        <Route path="/post-job" element={<PostAJob />} />
        </Route>
        
        <Route element={<ProtectedRoutes allowedRoles={["user"]}/>}>
        <Route path="/user-profile" element={<UserDashBoard />} />
        </Route>

        

      </Route>
    )
  )
   return (
      <AuthProvider>
          <RouterProvider router={router}/>
        </AuthProvider>
   )
}

export default App