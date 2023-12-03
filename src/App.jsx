import { Route, Routes } from "react-router"
import Dash from "./pages/Dash"
import Home from "./pages/Home"
import Head from "./components/Head"
import Course from "./pages/Course"

function App() {
    return (
        <>
            <Head />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dash />} />
                <Route path='/course/:id' element={<Course />} />
            </Routes>
        </>
    )
}

export default App
