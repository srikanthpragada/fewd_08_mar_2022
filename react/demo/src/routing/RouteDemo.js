import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";


export default function RouteDemo() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="first" element={<First />} />
                    <Route path="second" element={<Second />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Main() {
    return (
        <>
            <h1>Routing Demo</h1>
            <hr/>
            <nav className="nav navbar-expand-sm bg-danger">
            <Link className="nav-link text-white" to="/">Home</Link>
            <Link className="nav-link text-white" to="/first">First</Link>
            <Link className="nav-link text-white" to="/second">Second</Link>
            <Link className="nav-link text-white" to="/thrid">Third</Link>
            </nav>
            <Outlet />
        </>
    )
}

function Home() {
    return (
        <h1>Home</h1>
    )
}

function First() {
    return (
        <h1>First Component</h1>
    )
}


function Second() {
    return (
        <h1>Second Component</h1>
    )
}

function NotFound() {
    return (
        <h1>Sorry! Page not found!</h1>
    )
}