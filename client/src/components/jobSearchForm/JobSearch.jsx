import {BsFilter} from "react-icons/bs"
import { CiSearch } from "react-icons/ci"

export const MobileFilter = () => {
    return (
        <form className="flex  mt-4 gap-4 items-start">
            <div className="border-[1.5px] border-secondary-400 flex items-center py-[.2rem] px-[.4rem] gap-[.4rem] rounded-[0.25rem] w-[85%]">
                <input type="text" className="bg-transparent w-full outline-none" placeholder="search keyword" />
                <button className="px-4 py-1 hover:bg-primary-700">
                <CiSearch  className="w-[1.4rem] h-[1.4rem]"/>
                </button>
            </div>
            <div name="filter" className="px-[.4rem] border-secondary-400 border-[1.5px] py-[.2rem] rounded-[.2rem] cursor-pointer text-secondary-400 hover:bg-primary-700">
            <BsFilter  className="w-[2rem] h-[1.95rem]"/>
            </div>
        </form>
    )
}

export const DesktopFilter = () => {
    return (
        <form>
            <div className="mt-4 flex justify-between items-start">
                <input type="text" className="px-2 py-1 border-[1.5px]  rounded-[.3rem] border-secondary-400 outline-none" placeholder="Search keyword" />
                <select className="px-6 py-[5.5px] border-[1.5px]  rounded-[.3rem] border-secondary-400 bg-transparent">
                    <option selected>Experience</option>
                    <option>0-3 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                </select>

                <select className="px-6 py-[5.5px] border-[1.5px]  rounded-[.3rem] border-secondary-400 bg-transparent">
                    <option selected>Location</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>Onsite</option>
                </select>

                <select className="px-6 py-[5.5px] border-[1.5px]  rounded-[.3rem] border-secondary-400 bg-transparent">
                    <option selected>Job Type</option>
                    <option>Part-time</option>
                    <option>Full-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                </select>

                <button className=" text-[1rem] font-normal leading-normal cursor-pointer hover:opacity-[0.6] px-6 py-2 rounded-[.2rem] bg-secondary-400 text-primary-500">Find</button>
            </div>
        </form>
    )
}