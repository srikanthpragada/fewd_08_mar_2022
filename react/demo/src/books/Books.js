import React from 'react'

import ListBooks from './ListBooks'
import BookDetails from './BookDetails'
import AddBook from './AddBook'
import ListAuthors from './ListAuthors'
import SearchBooks from './SearchBooks'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";


export default function Books() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<ListBooks />} />
                    <Route path="details/:bookId" element={<BookDetails />} />
                    <Route path="add" element={<AddBook />} />
                    <Route path="search" element={<SearchBooks />} />
                    <Route path="authors" element={<ListAuthors />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Main() {
    return (
        <>
            <h1 className='text-primary'>Books</h1>
            
            <nav className="nav navbar-expand-sm bg-danger">
                <Link className="nav-link text-white" to="/">List Books</Link>
                <Link className="nav-link text-white" to="/add">Add Book</Link>
                <Link className="nav-link text-white" to="/search">Search Books</Link>
                <Link className="nav-link text-white" to="/authors">Authors</Link>
            </nav>
            <Outlet />
        </>
    )
}
 
function NotFound() {
    return (
        <h4>Sorry! Page not found!</h4>
    )
}