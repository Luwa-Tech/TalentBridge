import { DesktopFilter, MobileFilter } from "../components/jobSearchForm/JobSearch"
import useRender from "../hooks/useRender"


const FindJobs = () => {
    const {isMobile, isDesktop} = useRender()

    return (
        <main>
            <section className="bg-gradient-to-r from-secondary-500 to-secondary-400">
            <article className="relative pt-[4rem] pb-[12rem] md:w-[90%] md:mx-auto">
                <section className="text-primary-500 px-2 md:px-0">
                    <h2 className="text-[1.7rem] md:text-[3rem] font-normal leading-normal">200+ Jobs Listed</h2>
                </section>

                <div className="first-curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
            </article>
            </section>

            <section className="bg-primary-700 px-2 md:px-0 pt-[1rem] pb-[12rem] md:pt-[2rem] md:pb-[12rem]">
                <div className="w-[70%] mx-auto py-2 px-4">
                    <p className="text-[1.1rem] md:text-[1.3rem] font-medium leading-normal">Search Jobs</p>
                    {
                        isDesktop && <DesktopFilter />
                    }

                    {
                        isMobile && <MobileFilter />
                    }
                </div>

                <div className="md:w-[70%] md:mx-auto mt-[6rem]">
                    <h1 className="text-[1.5rem] text-center">Sorry, there are no jobs listed yet</h1>
                </div>
            </section>

        </main>
    )
}

export default FindJobs
