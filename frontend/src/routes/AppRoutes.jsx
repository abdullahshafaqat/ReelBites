import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RegisterUser from '../pages/RegisterUser.jsx'
import LoginUser from '../pages/LoginUser.jsx'
import RegisterFoodPartner from '../pages/RegisterFoodPartner.jsx'
import LoginFoodPartner from '../pages/LoginFoodPartner.jsx'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<RegisterUser />} />
        <Route path="/user/login" element={<LoginUser />} />
        <Route path="/food-partner/register" element={<RegisterFoodPartner />} />
        <Route path="/food-partner/login" element={<LoginFoodPartner />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
