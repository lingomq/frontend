import { Route, Routes } from "react-router"
import { Home } from "../pages/home/Home.jsx"

export const UserRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
    )
}