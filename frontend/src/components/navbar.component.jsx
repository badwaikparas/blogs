import { Link, Outlet } from "react-router-dom"
import logo from "../assets/react.svg"
import search from "../assets/search.png"
import pen from "../assets/pen.png"
import { useState } from "react"
const Navbar = () => {

    const [searchBoxVisiblity, setSearchBoxVisiblity] = useState(false)

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="flex-none w-10">
                    <img src={logo} className="w-full" />
                </Link>



                <div className={`absolute bg-white w-full left-0 top-full mt-0.5 border-b  border-slate-200 py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:opacity-100 md:pointer-events-auto ${searchBoxVisiblity ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none duration-100"}`}>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full md:w-auto bg-slate-100 p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-slate-400 md:pl-12"
                    />

                    <div>
                        <img src={search} alt="search icon" className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 w-5 h-5" />
                    </div>

                </div>
                <div className="flex items-center gap-3 md:gap-6 ml-auto">
                    <button className="md:hidden bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={() => setSearchBoxVisiblity(c => !c)}
                    >
                        <img src={search} alt="search icon" className="w-5 h-5" />
                    </button>

                    <Link to={"/editor"} className="hidden md:flex gap-2 link rounded-full">
                        <img src={pen} alt="" className="w-5 h-5" />
                        <p>Write</p>
                    </Link>

                    <Link to={"/signin"} className="btn-dark py-2">Sign In</Link >
                    <Link to={"/signup"} className="btn-light py-2 hidden md:block">Sign Up</Link >

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar