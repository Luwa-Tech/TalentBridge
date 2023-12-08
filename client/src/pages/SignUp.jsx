import { NavLink } from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios"
import {ImSpinner} from "react-icons/im"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"
import { useState, useEffect } from "react"
import Rodal from "rodal"


const SignUp = () => {
    const [visible, setVisible] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [error, setError] = useState("")

    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, trigger, formState, reset} = form
    const {errors, isDirty, isValid, isSubmitting, isSubmitSuccessful} = formState

    const submitForm = async (data) => {
        try {
            const response = await axios.post("https://talentbridge.onrender.com/api/user/signup", {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password
            })
            console.log(response)
            if(response.status === 201) {
                console.log(response.ok)
                setOpenModal(prev => !prev)
            }

        } catch(error) {
           setError(error.response.data.error)
        }
    }


    useEffect(() => {
        if (isValid && isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset, isValid])

    return (
        <main className="my-[3rem] md:my-[2rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)} noValidate>
                    <div className="flex flex-col gap-2 font-normal leading-normal">
                        
                        <input placeholder="First Name" className="border-[1.5px] py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" id="firstname" {...register("firstname", {
                            required: {
                                value: true,
                                message: "firstname is required"
                            }
                        })} />
                        <p className="text-red-700 text-[.8rem]">{errors.firstname?.message}</p>
                    </div>
                    <div  className="flex flex-col gap-2 font-normal leading-normal">
                        
                        <input placeholder="Last Name" className="border-[1.5px] py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" id="lastname" {...register("lastname", {
                            required: {
                                value: true,
                                message: "lastname is required"
                            }
                        })} />
                        <p className="text-red-700 text-[.8rem]">{errors.lastname?.message}</p>
                    </div>
                    <div className="flex flex-col gap-2 font-normal leading-normal">
                        
                        <input placeholder="Email" className="border-[1.5px] py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="email" id="email" {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email format"
                            }
                        })} />
                        <p className="text-red-700 text-[.8rem]">{errors.email?.message}</p>
                    </div>
                    <div className="flex flex-col gap-2 first-line:font-normal leading-normal">
                        <div className="flex items-center text-[1rem] border-[1.5px] border-secondary-500 rounded-[0.25rem]">
                            <input  className="text-[1rem] w-full py-2 px-2 outline-none" placeholder="Password" id="password" type={visible ? "text" : "password"} {...register("password", {
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/ ,
                                        message: "Password must include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character"
                                    },
                                    required: {
                                    value: true,
                                    message: "Password is required"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Minimum required length is 8"
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Maximum required length is 15"
                                    }

                            })}
                            onKeyUp={() => {
                                trigger("password")
                            }}
                            
                            />
                            <span className="px-4 py-2 cursor-pointer" onClick={() => setVisible(prev => !prev)}>{visible ? <BsFillEyeFill/> : <BsFillEyeSlashFill />}</span>
                        </div>
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </div>
                    {
                      error !== "" &&  <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    
                    <button type="submit" disabled={!isDirty || !isValid || isSubmitting} className={`bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.7] rounded-[0.3rem] md:text-[1rem] mb-2 flex justify-center items-center ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7]  hover:bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Sign Up"}</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">Already have an account? <NavLink to="/login" className="hover:underline text-secondary-500 md:text-[1rem]">login</NavLink></p>
            </section>
            <Rodal height={300} width={370} visible={openModal} onClose={() => setOpenModal(prev => !prev)} animation="zoom">
                <section className="py-6 flex flex-col items-center gap-4">
                    <p className="text-[#22c55e] font-bold text-[1.3rem] text-center">Thanks! your account has been successfully created.</p>
                    <p className="text-center text-[1rem] text-[#334155]">Please check your inbox (check your spam if you dont see the email), a verification email has been sent to you. kindly verify your email to to able to login and complete your profile.</p>
                    <button className="bg-secondary-500 text-primary-500 hover:bg-opacity-[0.95] px-[3rem] py-2 rounded-[.4rem]" onClick={() => setOpenModal(prev => !prev)}>OK</button>
                </section>
            </Rodal>
        </main>
    )
}

export default SignUp