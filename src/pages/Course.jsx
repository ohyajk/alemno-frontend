import React, { useState } from "react"
import { allCourses } from "../helper/state"
import { useParams } from "react-router"
import Accordion from "../components/Accordion"
import { useNavigate } from "react-router"

const Course = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const { courses, user } = allCourses()
    const course = courses.data.filter((c) => c._id == id)
    const c = course[0] || "no data available"
    console.log(c)
    if (c == "no data available") return <span>No Data Available</span>

    const addEnrollment = async (courseId, studentId) => {
        setLoading(true)
        try {
            const response = await fetch(`https://alemno-backend.onrender.com/api/student`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId,
                    studentId,
                }),
            })

            if (!response.ok) {
                throw new Error(`Failed to add enrollment: ${response.statusText}`)
            }
            setLoading(false)
            navigate("/dashboard")
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    const removeEnrollment = async (courseId, studentId) => {
        setLoading(true)
        try {
            const response = await fetch(`https://alemno-backend.onrender.com/api/student`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    courseId,
                    studentId,
                }),
            })

            if (!response.ok) {
                throw new Error(`Failed to remove enrollment: ${response.statusText}`)
            }
            setLoading(false)
            navigate("/")
        } catch (error) {
            console.error("Error:", error.message)
        }
    }

    return (
        <section class='text-gray-600 body-font overflow-hidden'>
            <div class='container px-5 py-24 mx-auto'>
                <div class='lg:w-4/5 mx-auto flex flex-wrap'>
                    <img alt={c.name} class='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src={c.thumbnail} />
                    <div class='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col gap-2'>
                        <h2 class='text-sm title-font text-gray-500 tracking-widest'>{c.instructor}</h2>
                        <h1 class='text-gray-900 text-3xl title-font font-medium mb-1'>{c.name}</h1>
                        <p class='leading-relaxed'>{c.description}</p>
                        <div class=''>{c.schedule}</div>
                        <div class=''>Location : {c.location}</div>
                        <div class=' '>Duration : {c.duration}</div>
                        <hr className='w-full h-1 bg-indigo-500 my-4' />
                        {loading && <span>Loading</span>}
                        {loading == false && (
                            <div class='flex'>
                                {c.students.includes(user.data[0]._id) ? (
                                    <button onClick={() => removeEnrollment(c._id, user.data[0]._id)} className='border-2 text-indigo-500 font-semibold border-indigo-500 rounded-lg px-4 py-2 hover:bg-indigo-500 hover:text-white'>
                                        Remove Enrollment
                                    </button>
                                ) : (
                                    <button onClick={() => addEnrollment(c._id, user.data[0]._id)} class='flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>
                                        Enroll Now
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <Accordion syllabus={c.syllabus} />
            </div>
        </section>
    )
}

export default Course
