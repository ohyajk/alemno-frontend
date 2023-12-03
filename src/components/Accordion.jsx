import React, { useState } from "react"

const Accordion = ({ syllabus }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
    }

    return (
        <div className='max-w-5xl mx-auto pt-4'>
            <h2 className='py-2 text-center text-2xl font-semibold text-black'>Syllabus</h2>
            {syllabus.map((item, index) => (
                <div key={item._id} className='mb-4 border border-gray-300 rounded-lg'>
                    <button className='w-full py-2 px-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none' onClick={() => toggleAccordion(index)}>
                        {item.topic}
                    </button>
                    {activeIndex === index && (
                        <div className='p-4'>
                            <p className='text-gray-700'>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion
