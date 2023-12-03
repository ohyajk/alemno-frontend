import React, { useEffect, useState } from "react"
import { allCourses } from "../helper/state"
import { Link } from "react-router-dom"

const Home = () => {
    const { courses, getCourses, getUser, user } = allCourses()

    const [filter, setFiltrer] = useState("")

    useEffect(() => {
        getCourses()
        getUser()
    }, [])

    return (
        <>
            <section className='text-gray-600 '>
                <div className='p-5 mx-auto'>
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <h1 className='text-lg font-bold text-indigo-500'>Search Here or Select from List</h1>
                        <input onChange={(e) => setFiltrer(e.target.value)} type='text' className='px-4 py-3 bg-white text-black/80 rounded-lg outline-none border-4 active:border-indigo-500 hover:border-indigo-500 focus:border-indigo-500 w-full max-w-xl' placeholder='Search Your favourite course' />
                    </div>
                    <div className='flex flex-wrap '>
                        {courses?.data
                            ?.filter((c) => c.name.toLowerCase().includes(filter.toLowerCase()))
                            .map((c) => {
                                return (
                                    <Link to={`course/${c._id}`} key={c._id} className='xl:w-1/4 md:w-1/2 p-4 cursor-pointer'>
                                        <div className='bg-gray-100 p-6 rounded-lg relative'>
                                            <img className='h-40 rounded w-full object-cover object-center mb-6' src={c.thumbnail} alt={c._id} />
                                            <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>{c.instructor}</h3>
                                            <h2 className='text-lg text-gray-900 font-medium title-font mb-2'>{c.name}</h2>
                                            <p className='leading-relaxed text-base'>{c.description}</p>
                                            <button className='bg-indigo-500 px-4 py-2 rounded-lg text-center text-white mt-4'>More Details</button>
                                            {c.students.includes(user.data[0]._id) && <span className='text-white bg-green-500 border-l border-t absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg p-4 text-lg font-semibold'>Enrolled</span>}
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
