import {useForm} from "react-hook-form"
import {ImSpinner} from "react-icons/im"

const PostAJob = () => {
    const form = useForm({
        mode: "onBlur"
    })

    const { formState } = form
    const {isDirty, isValid, isSubmitting} = formState
    return (
        <main>
            <section className="bg-gradient-to-r from-secondary-500 to-secondary-400">
            <article className="relative pt-[6rem] pb-[7rem] md:w-[90%] md:mx-auto">
                <section className="text-primary-500 px-2 md:px-0">
                    <h1 className="text-[1.7rem] md:text-[3rem] font-normal leading-normal">Post a Job</h1>
                    <p className="w-[80%] md:w-[40%]">Ready to Build Your Dream Team? Post Your Job Openings on TalentBridge and Attract the Best Talent in the Industry - It's Where Opportunity Meets Excellence.</p>
                </section>

                <div className="first-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </article>
            </section>

            <section className="bg-primary-700 px-2 md:px-0 pt-[1rem] pb-[12rem] md:pt-[2rem] md:pb-[12rem]">
                <form className="md:w-[70%] md:mx-auto py-2 px-2">
                    <h2 className="uppercase mb-2 text-[1.2rem] font-medium">Tell us about your job</h2>
                    <hr className="border-slate-300"/>

                    <label htmlFor="job-title" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                        Job name*
                        <input type="text" className="px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2" placeholder="Enter the job title you are hiring for" id="job-title"/>
                    </label> 

                    <label htmlFor="describe-job" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                        Describe your job*
                        <textarea id="describe-job" className="px-2 resize-none outline-none h-[8rem] bg-transparent border-[1.5px] border-slate-300" type="text" placeholder="Describe the work to be done"/>
                    </label>

                    <h2 className="uppercase mb-2 mt-[1.7rem] text-[1.1rem] font-medium">what are the job requirements?</h2>
                    <hr className="border-slate-300"/> 

                    <label htmlFor="skills" className="flex flex-col gap-2 mt-6 text-[1rem] font-medium">
                        Skills*
                        <input id="skills" className="px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2" type="text" placeholder="Select the skills needed for the job"/>
                    </label>

                    <section className="mt-6 gap-4 flex flex-col md:flex-row justify-between">
                        <label htmlFor="availability" className="flex flex-col gap-2 text-[1rem] font-medium">
                            Availability*
                            <select id="availability" className="md:w-[25rem] px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2">
                                <option value="I'm not sure">I'm not sure</option>
                                <option value="available">available</option>
                                <option value="not available">Not available</option>
                            </select>
                        </label>

                        <label htmlFor="job-title" className="flex flex-col gap-2 text-[1rem] font-medium">
                            Experience*
                            <select className="md:w-[25rem] px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2">
                                <option value="">Select one or more experience levels</option>
                                <option value="entry-level">Entry-level</option>
                                <option value="junior">Junior</option>
                                <option value="mid-level">Mid-level</option>
                                <option value="expert">Expert</option>
                            </select>
                        </label>
                    </section>

                    <label htmlFor="language" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                        Language*
                        <input id="language" className="px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2" type="text" placeholder="Add the language needed for the job"/>
                    </label>

                    <section className="mt-4 gap-2 flex flex-col md:flex-row justify-between">
                        <label htmlFor="job-title" className="flex flex-col gap-2 mt-2 text-[1rem] font-medium">
                                Job type*
                                <select className="md:w-[25rem] px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2">
                                    <option value="">Select job type</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                    <option value="internship">Internship</option>
                                </select>
                        </label>
                        <label htmlFor="salary" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                            salary*
                            <input id="salary" className="px-2 md:w-[25rem] border-[1.5px] border-slate-300 outline-none bg-transparent py-2" type="text" placeholder="Average salary candidates should expect" />
                        </label>
                    </section>

                    <h2 className="uppercase mb-2 mt-[1.7rem] text-[1.1rem] font-medium">Tell us about your company</h2>
                    <hr className=" border-slate-300"/> 
                    <p className=" text-slate-500 mt-2">The more information you provide the better your chances of attracting candidates</p>

                    <label htmlFor="company-name" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                        Company name
                        <input id="company-name" className="px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2" type="text" placeholder="Enter the name of your company"/>
                    </label>

                    <label htmlFor="company-website" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                        Company website
                        <input id="company-website" className="px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2" type="text" placeholder="Enter the name of your company"/>
                    </label>

                    <label htmlFor="location" className="flex flex-col gap-2 mt-4 text-[1rem] font-medium">
                        Location
                        <input id="location" className="px-2 border-[1.5px] border-slate-300 outline-none bg-transparent py-2" type="text" placeholder="City, State or Province, Country/Remote working"/>
                    </label>

                    <button disabled={!isDirty || !isValid || isSubmitting} className={`bg-secondary-400 py-2 text-primary-500 hover:bg-opacity-[0.7] rounded-[0.3rem] md:text-[1rem] mx-auto w-[30%] mt-8 mb-2 flex justify-center items-center ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7]  hover:bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Post Job"}</button>
                </form>
            </section>
        </main>
    )
}

export default PostAJob