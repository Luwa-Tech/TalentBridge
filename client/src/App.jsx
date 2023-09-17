import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ResetPassword from "./pages/ResetPassword"
import ForgotPassword from "./pages/ForgotPassword"
import UserDashBoard from "./pages/UserDashBoard"
import PostAJob from "./pages/PostAJob"
import VerifyEmail from "./pages/verifyEmail"
// import RequireAuth from "./components/RequireAuth"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        
        <Route path="/post-job" element={<PostAJob />} />
        
        <Route path="/user-profile" element={<UserDashBoard />} />

      </Route>
    )
  )
   return (
      <AuthContextProvider>
          <RouterProvider router={router}/>
        </AuthContextProvider>
   )
}

export default App