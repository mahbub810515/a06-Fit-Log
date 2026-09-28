
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import NavPlanButton from './button/NavPlanButton'
import NavSavedButton from './button/NavSavedButton'

const NavBar = () => {
    return (
        <div className="bg-slate-900 text-white border-b border-slate-700">
            <div className="container mx-auto px-2 sm:px-4">
                <div className="navbar min-h-16">

                    {/* Left Side */}
                    <div className="navbar-start">

                        {/* Mobile Menu */}
                        <div className="dropdown lg:hidden">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-sm text-white"
                            >
                                <svg
                                    aria-label="Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="
                                    menu menu-sm
                                    dropdown-content
                                    bg-slate-900
                                    text-white
                                    rounded-box
                                    z-50
                                    mt-3
                                    w-48
                                    p-2
                                    shadow-lg
                                "
                            >
                                <li>
                                    <Link
                                        href="/workout"
                                        className="hover:bg-slate-800"
                                    >
                                        Workouts
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/my-plan"
                                        className="hover:bg-slate-800"
                                    >
                                        My Plan
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Logo */}
                        <Link
                            href="/"
                            className="
                                btn btn-ghost
                                text-lg sm:text-xl
                                text-white
                                hover:bg-lime-100
                                hover:text-lime-500
                                gap-1 sm:gap-2
                            "
                        >
                            <Image
                                src={logo}
                                alt="FitLog logo"
                                width={32}
                                height={32}
                                className="w-7 h-7 sm:w-8 sm:h-8"
                            />

                            <span>FitLog</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <Link href="/workout">
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link href="/my-plan">
                                    My Plan
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side */}
                    <Link href="/my-plan" className="navbar-end gap-1 sm:gap-2 md:gap-4">                      
                        <NavPlanButton />
                        <NavSavedButton />                      
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar

