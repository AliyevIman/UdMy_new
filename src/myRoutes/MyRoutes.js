import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Category from '../category/Category'
import CatCourses from '../pages/CatCourses'
import CourseDetail from '../pages/CourseDetail'
import Home from '../pages/Home'
import InstCourses from '../pages/InstCourses'
import Login from '../pages/Login'
import LoginReal from '../pages/LoginReal'
// import PopularCourses from '../pages/PopularCourses'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route  path='/popular/:id' element={<CourseDetail/>} />
        <Route  path='/courses/:id' element={<CatCourses/>} />
        <Route path='/instcours/:id' element={<InstCourses/>} />
        <Route path='/login' element={<Login/>}  />
        <Route path='/loginreal' element={<LoginReal/>}  />



    </Routes>
  )
}

export default MyRoutes