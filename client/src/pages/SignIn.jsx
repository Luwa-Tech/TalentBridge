import { NavLink, useNavigate, useLocation} from "react-router-dom"
import {useForm} from "react-hook-form"
import {ImSpinner} from "react-icons/im"
import axios from "axios"
import { useState, useEffect } from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import useAuth from "../hooks/useAuth"

const SignIn = () => {
    const {setAuth} = useAuth()

    const [error, setError] = useState("")
    const [visible, setVisible] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, formState, reset} = form
    const {errors, isDirty, isValid, isSubmitting, isSubmitSuccessful} = formState

    const signInUser = async (data) => {
        try {
            const response = await axios.post("https://talentbridge.onrender.com/api/user/login", {
                email: data.email,
                password: data.password
        })
        if(response) {
            //give user access and redirect user profile
            console.log(response.data.user)

            const roles = response.data.user.user.role
            const accessToken = response.data.user.authToken

            setAuth({
                user: data.email,
                roles: [roles],
                accessToken: accessToken
            })

            navigate(from, {replace: true})
        }
        }catch(error) {
            setError(error.response.data.error)
        }
    }

    useEffect(() => {
        if (isValid && isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset, isValid])

    return (
        <main className="my-[5rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(signInUser)} noValidate>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input className="border-[1.5px] border-secondary-500 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="email" type="email"  {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            },
                            pattern: {
                                value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email format"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.email?.message}</p>
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Password
                        <div className="flex justify-between items-center border-[1.5px] px-2 text-[1rem] border-secondary-500 rounded-[0.25rem]">
                            <input  className="text-[1rem] w-full py-2 outline-none" type={visible ? "text" : "password"} id="password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })}/>
                            <span className="px-2 py-2 rounded-[1.2rem] hover:bg-slate-400" onClick={() => setVisible(prev => !prev)}>{visible ? <BsFillEyeFill/> : <BsFillEyeSlashFill />}</span>
                        </div>
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </label>
                    <NavLink to="/forgot-password" className="hover:underline text-secondary-500 text-right mt-2">Forgot Password?</NavLink>
                    {
                      error !== "" &&  <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button disabled={!isDirty || !isValid || isSubmitting} className={`bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.7] flex justify-center items-center rounded-[0.3rem] md:text-[1.1rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7] hover:bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Login"}</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">No account yet? <NavLink to="/sign-up" className="hover:underline text-secondary-500 md:text-[1rem]">SignUp</NavLink></p>
            </section>
        </main>
    )
}

export default SignIn