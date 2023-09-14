import { NavLink, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import { useState } from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import {ImSpinner} from "react-icons/im"
import axios from "axios"

const ResetPassword = () => {
    const navigate = useNavigate()
    const [newPassword, setNewPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)
    const [error, setError] = useState("")
    const form = useForm({
        mode: "onBlur"
    })

    const resetPassword = async (data) => {
        try {
            //implement API token security
            const response = await axios.post("https://talentbridge.onrender.com/api/user/reset-password-with-token?resetToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGYwOTVlZDEzM2YzYzA2MTYyYjIzOWUiLCJpYXQiOjE2OTM0ODg4OTUsImV4cCI6MTY5MzQ4OTQ5NX0.eJ9xDWSeBwre4l5ZBuRwTiKbaThlAVW5399p7rdCkcY", {
                newPassword: data.newPassword,
                confirmPassword: data.confirmPassword
            })
            if (response.status === 200) {
                //redirect user to sign-in
                navigate("/sign-in")
            }
        } catch(error) {
            setError(error.response.data.error)
        }
    }

    const {register, handleSubmit, formState} = form
    const {errors, isDirty, isValid, isSubmitting} = formState
    return (
        <main className="mt-[2rem] md:mt-[.5rem]">
            <NavLink to="/" className="px-2 md:px-10 text-[1.1rem] md:text-[1.6rem] font-bold leading-normal text-secondary-500">TalentBridge</NavLink>
            <section className="md:w-[30%] mx-auto w-[80%] my-[5rem]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Reset Password</h1>
                <form className="flex flex-col gap-4" onClick={handleSubmit(resetPassword)} noValidate>
                    <label htmlFor="newPassword" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Password
                        <div className="flex justify-between items-center border-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem]">
                            <input className="text-[1rem] w-full py-2 outline-none" id="newPassword" type={newPassword ? "text" : "password"} {...register("newPassword", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })}/>
                            <span className="px-2 py-2 rounded-[1.2rem] hover:bg-slate-400" onClick={() => setNewPassword(prev => !prev)}>{newPassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill />}</span>
                        </div>
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </label>
                    <label htmlFor="confirmPassword" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Repeat Password
                        <div className="flex justify-between items-center border-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem]">
                            <input className="text-[1rem] w-full py-2 outline-none" id="confirmPassword" type={confirmPassword ? "text" : "password"} {...register("confirmPassword", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })} />
                            <span className="px-2 py-2 rounded-[1.2rem] hover:bg-slate-400" onClick={() => setConfirmPassword(prev => !prev)}>{confirmPassword ? <BsFillEyeFill/> : <BsFillEyeSlashFill />}</span>
                        </div>
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </label>
                    {
                      error !== "" &&  <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button className={`bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.7] rounded-[0.3rem] md:text-[1.1rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7]  hover:bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Reset"}</button>
                </form>
            </section>
        </main>
    )
}

export default ResetPassword