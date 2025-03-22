import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar.component'
import { UserAuthForm } from './userAuthForm.pages'

function BlogPage() {
    return (
        <Routes>
            <Route path="/" element={<Navbar />} >
                <Route path="signin" element={<UserAuthForm type="sign-in" />} />
                <Route path="signup" element={<UserAuthForm type="sign-up" />} />
            </Route>

        </Routes>
    )
}

export default BlogPage
