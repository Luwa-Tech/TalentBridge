import { NavLink, useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios"
import {ImSpinner} from "react-icons/im"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { useState } from "react"


const SignUp = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, formState} = form
    const {errors, isDirty, isValid, isSubmitting} = formState

    const submitForm = async (data) => {
        try {
            const response = await axios.post("https://talentbridge.onrender.com/api/user/signup", {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            })
            console.log(response)
            if(response.status === 200) {
                console.log(response.ok)
                navigate("/sign-up/verify-email")
            }

        } catch(err) {
           console.log()
        }
    }

    return (
        <main className="my-[3rem] md:my-[2rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)} noValidate>
                    <label htmlFor="firstname" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Firstname
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" id="firstname" {...register("firstname", {
                            required: {
                                value: true,
                                message: "firstname is required"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.firstname?.message}</p>
                    </label>
                    <label htmlFor="lastname" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Lastname
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" id="lastname" {...register("lastname", {
                            required: {
                                value: true,
                                message: "lastname is required"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.lastname?.message}</p>
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="email" id="email" {...register("email", {
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
                        <div className="flex justify-between items-center border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem]">
                            <input  className="text-[1rem] w-full outline-none" id="password" type={visible ? "text" : "password"} {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                            })}/>
                            <span className="px-2 py-2 rounded-[1.2rem] hover:bg-slate-400" onClick={() => setVisible(prev => !prev)}>{visible ? <BsFillEyeFill/> : <BsFillEyeSlashFill />}</span>
                        </div>
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </label>
                    <button disabled={!isDirty || !isValid || isSubmitting} className={`bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.9] rounded-[0.3rem] md:text-[1rem] mb-2 flex justify-center items-center ${isSubmitting ? "bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Sign Up"}</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">Already have an account? <NavLink to="/login" className="hover:underline text-secondary-500 md:text-[1rem]">login</NavLink></p>
            </section>
        </main>
    )
}

export default SignUp

// To check a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character

// regex: ^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$