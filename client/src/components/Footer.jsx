import { NavLink, useLocation } from "react-router-dom"

const RoutesWithoutFooter = ["/login", "/unauthorized", "/sign-up", "/reset-password", "/forgot-password", "/sign-up/verify-email", "/forgot-password/initialize_password_reset"]

const Footer = () => {
    const {pathname} = useLocation()

     //check if pathname includes one of the routes in 
     //RoutesWithoutHeader
     //if true render null
    if (RoutesWithoutFooter.some((item) => pathname.includes(item))) {
        return null
    }

    return (
        <footer className="bg-primary-600 px-2 md:px-0 pt-[1rem] pb-[2rem] md:pt-[2rem] md:pb-[2rem]">
            <div className="md:w-[90%] md:mx-auto text-primary-500 flex flex-col md:flex-row gap-[1.2rem] md:gap-[5.5rem] items-start">
                <article className="flex flex-col md:gap-2">
                    <h2 className="text-[1.5rem] md:text-[2rem] font-bold leading-normal">TalentBridge</h2>
                    <p className="text-[1.1rem] md:text-[1.3rem] font-medium leading-normal">Find Your Dream Job</p>
                </article>

                <article className="flex flex-col md:gap-2">
                    <h2 className="text-[1.3rem] md:text-[1.5rem] font-medium leading-normal">Company</h2>
                    <NavLink className="text-[.95rem] md:text-[1.1rem] font-normal leading-normal hover:bg-primary-500 hover:bg-opacity-[0.1] px-2 py-1 rounded-[.2rem]">About</NavLink>
                    <NavLink className="text-[.95rem] md:text-[1.1rem] font-normal leading-normal hover:bg-primary-500 hover:bg-opacity-[0.1] px-2 py-1 rounded-[.2rem]">FAQ</NavLink>
                    <NavLink className="text-[.95rem] md:text-[1.1rem] font-normal leading-normal hover:bg-primary-500 hover:bg-opacity-[0.1] px-2 py-1 rounded-[.2rem]">Sign Up</NavLink>
                </article>

                <article className="flex flex-col md:gap-4">
                    <h2 className="text-[1.3rem] md:text-[1.5rem] font-medium leading-normal">Subscribe</h2>
                    <div className="border-[1.5px] text-primary-500 flex items-center py-[.2rem] md:py-[.3rem] px-[.6rem] gap-[.4rem] md:gap-0 rounded-[0.25rem] max-w-[90%] md:max-w-[100%]">
                        <input className="bg-transparent w-full outline-none" type="text" placeholder="Email"/>
                        <button className="cursor-pointer px-2 py-1 bg-secondary-500 rounded-[.2rem] hover:bg-opacity-[0.6]">Subscribe</button>
                    </div>
                </article>
            </div>

        </footer>
    )
}

export default Footer