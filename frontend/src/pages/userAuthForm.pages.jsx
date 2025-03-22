import InputBox from "../components/input.component"
import userIcon from "../assets/userAuthFrom/user.svg"
import atIcon from "../assets/userAuthFrom/at.svg"
import keyIcon from "../assets/userAuthFrom/key.svg"
import { Link, useNavigate } from "react-router-dom"
import googlePng from "../assets/userAuthFrom/google.png"
import AnimationWrapper from "../common/page-animation"
import { useRef } from "react"
export const UserAuthForm = ({ type }) => {
    const authForm = useRef();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        let form = new FormData(authForm.current);
        let formData = {}

        for (let [key, value] of form.entries()) {
            formData[key] = value
        }

        navigate("/")
    }

    return (
        <AnimationWrapper keyValue={type}>
            <section className="h-cover flex justify-center items-center">
                <form ref={authForm} className="w-[80%] max-w-[400px]">
                    <h1 className="text-4xl capitalize text-center mb-24">
                        {type == "sign-in" ? "Welcome Back" : "Join Us Today"}
                    </h1>
                    {
                        type != "sign-in" ?
                            <InputBox
                                name="Fullname"
                                type="text"
                                placeholder="Full name"
                                icon={userIcon}
                            />
                            :
                            ""
                    }
                    <InputBox
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon={atIcon}
                    />
                    <InputBox
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon={keyIcon}
                    />
                    <button className="btn-dark center mt-14" onClick={handleSubmit}>
                        {type.replace("-", " ")}
                    </button>

                    <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black" />
                        <p>or</p>
                        <hr className="w-1/2 border-black" />
                    </div>

                    <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                        <img src={googlePng} alt="" className="w-6" />
                        continue with google
                    </button>


                    {
                        type == "sign-in" ?
                            <p className="mt-6 text-slate-600 text-xl text-center">
                                Dont't have an account ?
                                <Link to="/signup" className="underline text-black text-xl ml-1" >
                                    Join us today
                                </Link>
                            </p>
                            :
                            <p className="mt-6 text-slate-600 text-xl text-center">
                                Already a member ?
                                <Link to="/signin" className="underline text-black text-xl ml-1" >
                                    Sign In Here
                                </Link>
                            </p>
                    }
                </form>
            </section>
        </AnimationWrapper>
    )
}