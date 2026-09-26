import Link from 'next/link'
import logo from '@/assets/logo.png'
import React from 'react'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='bg-slate-900 text-white border-b border-slate-200'>
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><Link href={'/'}>Wokouts</Link></li>
                            <li><Link href={'/my-plan'}>My Plan</Link></li>

                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost text-xl text-white hover:bg-lime-100 hover:text-lime-500">
                    <Image src={logo} alt='logo'/>
                    FitLog
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={'/'}>Wokouts</Link></li>
                        <li><Link href={'/my-plan'}>My Plan</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <button className="btn">Plan</button>
                    <button className="btn">Saved</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar