import { create } from "zustand"

export const allCourses = create((set) => ({
    courses: [],
    user: "",
    getCourses: async () => {
        try {
            const response = await fetch("https://alemno-backend.onrender.com/api/courses")
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            set({ courses: data })
        } catch (error) {
            console.error("Error fetching courses:", error.message)
        }
    },
    getUser: async () => {
        try {
            const response = await fetch("https://alemno-backend.onrender.com/api/user")
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            set({ user: data })
        } catch (error) {
            console.error("Error fetching courses:", error.message)
        }
    },
}))
