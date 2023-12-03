import React from "react"
import { Link } from "react-router-dom"
import { allCourses } from "../helper/state"

const Head = () => {
    const { user } = allCourses()

    return (
        <header className='border-b-4 bg-indigo-500 border-indigo-500 text-white'>
            <div className=' mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <Link to='/' className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-10 h-10 text-white p-2 bg-inherit rounded-full' viewBox='0 0 24 24'>
                        <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
                    </svg>
                    <span className=' text-xl font-bold'>CoursePro</span>
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center justify-center'>
                    <Link to='/' className='mr-5 hover:underline underline-offset-8 font-bold text-lg'>
                        Home
                    </Link>
                    <Link to='/dashboard' className='mr-5 hover:underline underline-offset-8 font-bold text-lg'>
                        Dashboard
                    </Link>
                    <h2 className='text-lg  p-2 border border-white/50 rounded-lg'>Welcome, {user ? user.data[0].name : "User"}</h2>
                </nav>
            </div>
        </header>
    )
}

export default Head
