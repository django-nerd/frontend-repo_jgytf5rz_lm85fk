import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Home from './pages/Home'
import CampusServices from './pages/CampusServices'
import CoreAdvising from './pages/CoreAdvising'
import CourseScheduling from './pages/CourseScheduling'
import CareerAdvising from './pages/CareerAdvising'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus-services" element={<CampusServices />} />
        <Route path="/core-advising" element={<CoreAdvising />} />
        <Route path="/course-scheduling" element={<CourseScheduling />} />
        <Route path="/career-advising" element={<CareerAdvising />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
