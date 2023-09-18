import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import useAuth from "../hooks/useAuth"


const RoutesWithoutHeader = ["/login", "/unauthorized", "/sign-up", "/reset-password", "/forgot-password", "/sign-up/verify-email", "/forgot-password/initialize_password_reset"]

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const {auth} = useAuth()

    const mobileNavToggle = () => {
        setToggle(prev => !prev)
     }

     const closeToggle = () => {
        setToggle(prev => !prev)
     }

    const {pathname} = useLocation()

     //check if pathname includes one of the routes in RoutesWithoutHeader
     //if true render null
    if (RoutesWithoutHeader.some((item) => pathname.includes(item))) {
        return null
    }

    return (
        <header className="md:py-2 bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-500">
                <div className="flex justify-between items-center md:w-[90%] md:mx-auto px-2 py-2 md:px-0 md:py-0 relative">
                    <h1 className="text-[1.4rem] md:text-[1.6rem] font-bold leading-normal z-[25] md:z-auto">TalentBridge</h1>
                    {
                        toggle ? (
                            <AiOutlineClose onClick={mobileNavToggle} className="md:hidden w-8 h-8 z-[25]"/>
                        ) : (
                            <RxHamburgerMenu onClick={mobileNavToggle} className="md:hidden w-8 h-8 z-[25]"/>
                        )
                    }
                    <nav className={`bg-secondary-500 text-primary-600 md:text-primary-500 md:bg-transparent flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-center md:w-full fixed md:static pt-20 md:pt-0  transition-all duration-[0.15s] mobile-nav ease-in md:z-auto z-[20] ${toggle ? "right-0" : "right-[-100%]"}`}>
                        <ul className="flex flex-col gap-2 md:gap-4 md:flex-row md:mx-auto items-center">
                            <li onClick={closeToggle}><NavLink to="/" className="nav-links">Home</NavLink></li>
                            <li onClick={closeToggle}><NavLink to="/search-jobs" className="nav-links">Jobs</NavLink></li>
                            <li onClick={closeToggle}><NavLink to="/about-us" className="nav-links">About Us</NavLink></li>
                        </ul>
                        <ul className="flex flex-col gap-4 md:gap-4 md:flex-row items-center">

                            {
                                auth?.user ? (
                                    <li onClick={closeToggle}>
                                    <NavLink to="/user-profile" className="nav-links">
                                        Profile
                                    </NavLink>
                                    </li>
                                ) : (
                                    <li onClick={closeToggle}>
                                    <NavLink to="/login" className="nav-links">
                                        Login
                                    </NavLink>
                                    </li>
                                )
                            }



                            <li onClick={closeToggle}><NavLink to="/post-job" className="text-[1rem] font-bold md:font-normal cursor-pointer hover:opacity-[0.6] px-4 py-2 rounded-[.2rem] bg-primary-600 text-primary-500">Post a Job</NavLink></li>
                        </ul>
                    </nav>
                </div>
        </header>
    )
}

export default Header