import { NavLink } from "react-router-dom"
import {motion, useInView} from "framer-motion"
import {useRef} from "react"

const AboutUs = () => {
    const ref = useRef()
    useInView(ref, {once: true})
    return (
        <main>
            <section className="bg-gradient-to-r from-secondary-500 to-secondary-400">
            <article ref={ref} className="relative pt-[6rem] pb-[9rem] md:w-[90%] md:mx-auto">
                <motion.section variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className="text-primary-500 px-2 md:px-0">
                    <h1 className="text-[1.7rem] md:text-[3rem] flex justify-center items-center font-normal leading-normal">About TalentBridge</h1>
                    <p className="w-[95%] mx-auto md:w-[60%] text-justify">At TalentBridge, we are more than just a job search platform; we are your dedicated companion on your professional journey. Our mission is to empower individuals like you to achieve their career aspirations by bridging the gap between talent and opportunity.  <br/>Founded with the belief that everyone deserves a fulfilling career,TalentBridge is committed to fostering a thriving community of job seekers and employers alike. We understand the unique challenges of today's dynamic job market and strive to provide innovative solutions that simplify the job search process.</p>

                    <p className="w-[95%] mx-auto mt-4 md:w-[60%] text-justify">Our platform is a testament to our dedication to excellence, featuring user-friendly tools, insightful resources, and a vast network of top companies and skilled professionals. whether you're a job seeker eager to explore exciting opportunities or an employer seeking the perfect candidate to complement your team, TalentBridgeis the place where aspirations meet achievements.</p>

                    <p className="w-[95%] mx-auto mt-4 md:w-[60%] text-justify">Join us on this transformative journe, where we believe in your potential and are here to support in you every step of the way. Together, we build bridges to brigther futures and unlock your true career potential. Welcome to TalentBridge, where your success story begins.</p>
                </motion.section>

                <div className="first-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </article>
            </section>

            <section ref={ref} className="bg-primary-700 px-2 md:px-0 pt-[1rem] pb-[12rem] md:pt-[2rem] md:pb-[12rem]">
                <motion.div variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0}
                }} initial="hidden" animate="visible" transition={{duration: 0.5, delay: 0.25}} className="w-[95%] mx-auto mt-4 md:w-[60%] flex flex-col justify-center items-center gap-4">
                    <h2 className="text-[1.3rem] md:text-[2.2rem] uppercase  font-normal leading-normal">join the talentbridge revolution</h2>
                    <p className="text-[.75rem] md:text-[1.1rem]">Where Opportunity Meets Innovation. Be a visionary, Join Us Today!</p>
                    <NavLink className="bg-secondary-400 py-2 text-primary-500 hover:bg-opacity-[0.7] rounded-[0.3rem] md:text-[1rem] mx-auto w-[30%] flex justify-center items-center" to="/sign-up">Sign Up</NavLink>
                </motion.div>
            </section>
        </main>
    )
}

export default AboutUs