import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom";
import HomeComponent from "../lazyloading/HomeComponent";
const AboutComponent = React.lazy(() => import("../lazyloading/AboutComponent"));

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<Suspense fallback={<div>Loading....</div>}>
                <AboutComponent />
            </Suspense>} />
        </Routes>
    )
}

export default Router;