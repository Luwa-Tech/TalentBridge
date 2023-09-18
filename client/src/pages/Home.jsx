import { NavLink } from "react-router-dom"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

import carbonIcon from "../assets/icons/carbon_application-web.png"
import marketingIcon from "../assets/icons/nimbus_marketing.png"
import codeIcon from "../assets/icons/bi_code-slash.png"
import arcIcon from "../assets/icons/arcticons_tagwriter.png"

import dribbleIcon from "../assets/icons/Dribbble_logo_perple 1.png"
import webtoonIcon from "../assets/icons/Naver_Line_Webtoon_logo 1.png"
import shopeeIcon from "../assets/icons/shopee-logo-40482 1.png"
import tokopediaIcon from "../assets/icons/tokopedia-logo-40654CCDD6-seeklogo 1.png"

const Home = () => {
    const ref = useRef(null)
    useInView(ref, {once: true})
    return (
        <main>
            <section className="bg-gradient-to-r from-secondary-500 to-secondary-400">
            <article ref={ref} className="relative pt-[6rem] pb-[10rem] md:w-[90%] md:mx-auto">
                <motion.section variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className="text-primary-500 px-2 md:px-0">
                    <h2 className="text-[1.7rem] md:text-[3rem] font-normal leading-normal">200+ Jobs Listed</h2>
                    <h2 className="text-[2.2rem] md:text-[3.5rem] font-normal leading-normal">Find Your Dream Job</h2>
                    <p className="mt-[1rem] mb-6 text-[1rem] md:text-[1.4rem] font-normal leading-normal w-[90%] md:w-[40%]">Navigate Your Career Journey Seamlessly with TalentBridge - Your Job Search Companion</p>
                    <NavLink to="/search-jobs" className="mt-6 text-[1rem] font-normal leading-normal cursor-pointer hover:opacity-[0.6] px-6 py-2 rounded-[.2rem] bg-primary-600">Find Jobs</NavLink>
                </motion.section>

                <div className="first-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </article>
            </section>

            <section className="bg-primary-700 px-2 md:px-0 pt-[1rem] pb-[12rem] md:pt-[2rem] md:pb-[12rem] relative">
                <div ref={ref} className="md:w-[90%] md:mx-auto flex justify-between md:flex-row flex-col-reverse gap-[2.8rem] md:gap-[3rem]">
                    <motion.article variants={{
                            hidden: {opacity: 0, x: -250},
                            visible: {opacity: 1, x: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className=" w-[95%] mx-auto md:w-auto flex gap-4 min-h-[10rem]">
                        <motion.section variants={{
                            hidden: {opacity: 0, y: -100},
                            visible: {opacity: 1, y: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.6}}  className="flex flex-col gap-6 mb-4">
                            <div className="card">
                                <img src={carbonIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Web Design</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">30+ available positions</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={codeIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Programmer</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">43+ available positions</p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section variants={{
                            hidden: {opacity: 0, y: 100},
                            visible: {opacity: 1, y: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.6}} className="flex flex-col gap-6 mt-[3.5rem]">
                            <div className="card">
                                <img src={marketingIcon} className="w-[1.4rem] md:w-[1.8rem]"/>
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Marketing</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">33+ available positions</p>
                                </div>
                            </div>

                            <div className="card">
                                <img src={arcIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Script Writer</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">30+ available positions</p>
                                </div>
                            </div>
                        </motion.section>
                    </motion.article>

                    <motion.article variants={{
                            hidden: {opacity: 0, x: 250},
                            visible: {opacity: 1, x: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className="md:w-[48%]">
                        <h2 className="text-[2.2rem] mb-[1.1rem] md:text-[2.5rem] font-medium leading-normal">Popular Category</h2>
                        <p className="text-[1rem] md:text-[1.4rem] font-normal md:leading-[1.75rem]">Embark on a journey of exploration as you delve into the most in-demand fields, discovering a world of career opportunities that await you on TalentBridge - where your dream job is just a click away.
                        </p>
                    </motion.article>
                </div>

                <div className="second-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section className="bg-secondary-500 text-primary-500 px-2 md:px-0 pt-[1rem] pb-[12rem] md:pt-[2rem] md:pb-[12rem] relative">
                <div className="md:w-[90%] md:mx-auto flex justify-between md:flex-row flex-col gap-[2.8rem] md:gap-[3rem]">
                <motion.article variants={{
                            hidden: {opacity: 0, x: -250},
                            visible: {opacity: 1, x: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className="md:w-[48%]">
                        <h2 className="text-[2.2rem] mb-[1.1rem] md:text-[2.5rem] font-medium leading-normal">Top Companies</h2>
                        <p className="text-[1rem] md:text-[1.4rem] font-normal md:leading-[1.75rem]">Connect with Industry Leaders and leading Innovators. Explore Career Opportunities with the Most Esteemed Companies on TalentBridge - Your Gateway to Success.
                        </p>
                    </motion.article>

                    <motion.article variants={{
                            hidden: {opacity: 0, x: 250},
                            visible: {opacity: 1, x: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className="text-primary-500 w-[95%] mx-auto md:w-auto flex gap-4 min-h-[10rem]">
                        <motion.section variants={{
                            hidden: {opacity: 0, y: -100},
                            visible: {opacity: 1, y: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.6}} className="flex flex-col gap-6 mb-4">
                            <div className="card card-gradient">
                                <div>
                                    <img src={webtoonIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Webtoon</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">45+ available positions</p>
                                </div>
                            </div>

                            <div className="card card-gradient">
                                <div>
                                    <img src={shopeeIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Shopee</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">50+ available positions</p>
                                </div>
                            </div>
                        </motion.section>

                        <motion.section variants={{
                            hidden: {opacity: 0, y: 100},
                            visible: {opacity: 1, y: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.6}} className="flex flex-col gap-6 mt-[3.5rem]">
                            <div className="card card-gradient">
                                <div>
                                    <img src={dribbleIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Dribble</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">33+ available positions</p>
                                </div>
                            </div>

                            <div className="card card-gradient">
                                <div>
                                    <img src={tokopediaIcon} className="w-[1.4rem] md:w-[1.8rem]" />
                                </div>
                                <div className="px-4 pb-4">
                                    <h3 className="text-[.92rem] md:text-[1.3rem] font-medium leading-normal">Tokopedia</h3>
                                    <p className="text-[.78rem] md:text-[1.1rem] font-normal leading-normal">35+ available positions</p>
                                </div>
                            </div>
                        </motion.section>
                    </motion.article>
                </div>

                <div className="first-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>

            <section ref={ref} className="bg-primary-700 px-2 md:px-0 pt-[1rem] pb-[12rem] md:pt-[2rem] md:pb-[12rem] relative">
                <div className="md:w-[90%] md:mx-auto flex justify-between md:flex-row flex-col gap-[2.8rem] md:gap-[3rem]">
                    <motion.article variants={{
                            hidden: {opacity: 0, y: 100},
                            visible: {opacity: 1, y: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}}>
                        <h2 className="text-[2.2rem] md:text-[2.5rem] font-medium leading-normal">Looking for a Job?</h2>
                        <p className="text-[1rem] md:text-[1.4rem] font-normal md:leading-[1.75rem] w-[90%] my-[1rem]">Ready to Take the Next Step in Your Career? Begin Your Job Search Journey with TalentBridge and Discover the Perfect Opportunity Waiting just for You.</p>
                        <NavLink to="/search-jobs" className="text-[1rem] font-normal cursor-pointer hover:opacity-[0.6] px-4 py-2 rounded-[.2rem] bg-primary-600 text-primary-500">Find Jobs</NavLink>
                    </motion.article>
                    <motion.article variants={{
                            hidden: {opacity: 0, y: 100},
                            visible: {opacity: 1, y: 0}
                        }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}}>
                        <h2 className="text-[2.2rem] md:text-[2.5rem] font-medium leading-normal">Looking for an Expert?</h2>
                        <p className="text-[1rem] md:text-[1.4rem] font-normal md:leading-[1.75rem] w-[90%] my-[1rem]">Seeking Top Talent to Elevate Your Projects? Explore a Pool of Expertise on TalentBridge, Where Exceptional Skills and Professionals Converge to Fuel Your Success.</p>
                        <NavLink to="search-jobs" className="text-[1rem] font-normal cursor-pointer hover:opacity-[0.6] px-4 py-2 rounded-[.2rem] bg-primary-600 text-primary-500">Post a Job</NavLink>
                    </motion.article>
                </div>

                <div className="third-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </main>
    )
}

export default Home