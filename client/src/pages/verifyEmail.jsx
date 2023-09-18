import {GoVerified} from "react-icons/go"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState } from "react"
import {useForm} from "react-hook-form"
import {ImSpinner} from "react-icons/im"
import axios from "axios"
import Rodal from "rodal"

const VerifyEmail = () => {
    const {token} = useParams()
    const [error, setError] = useState("")
    const [response, setResponse] = useState(false)
    const form = useForm({
        mode: "onBlur"
    })

    const {handleSubmit, formState} = form
    const { isSubmitting} = formState

    const verifyUserEmail = async () => {
        try {
            const response = await axios.get(`https://talentbridge.onrender.com/api/user/verify/${token}`)
            if (response) {
                setResponse(true)
            }
        }catch(error) {
            if(error.response.status === 404) {
                console.log(error.response)
                setError("Sorry, we couldn't verify your email")
            }
            
        }
    }


    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-[5rem] gap-4">

                            <form onClick={handleSubmit(verifyUserEmail)} noValidate className="flex flex-col gap-2 justify-center items-center">
                                <h1 className="text-[1.1rem] text-center">Please click the button below to verify your email</h1>
                                <button className="bg-secondary-500 text-primary-500 px-[.7rem] py-[.5rem] rounded-[.2rem] flex justify-center w-[9rem] items-center hover:bg-opacity-[0.95]">{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Verify"}</button>

                                {
                                    error !== "" && <p className="text-red-700 text-[.95rem]">{error}</p>
                                }
                            </form>

                            <Rodal height={300} width={370} visible={response} onClose={() => setResponse(prev => !prev)} animation="zoom">
                                <section className="py-6 flex flex-col items-center gap-4">
                                    <div className="bg-[#4ade80] px-[1.3rem] py-[1.2rem] rounded-[4rem] ">
                                    <GoVerified className="text-primary-500 md:w-[4rem] md:h-[4rem] w-[2rem] h-[2rem]"/>
                                    </div>
                                    <p className="text-center text-[1rem] text-[#334155]">Your email has been verified successfully. Proceed to login</p>
                                    <NavLink to="/login" className="bg-secondary-500 text-primary-500 hover:bg-opacity-[0.95] px-[3rem] py-2 rounded-[.4rem]">go to login</NavLink>
                                </section>
                            </Rodal>       
            </div>
        </main>
    )
}

export default VerifyEmail