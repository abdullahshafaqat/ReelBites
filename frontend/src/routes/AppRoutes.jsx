import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChooseRegister from '../pages/auth/ChoseRegister'
import RegisterUser from '../pages/auth/RegisterUser'
import LoginUser from '../pages/auth/LoginUser'
import FoodPartner from '../pages/auth/RegisterFoodPartner'
import FoodPartnerLogin from '../pages/auth/LoginFoodPartner'
import Home from '../pages/general/Home'
import BottomNav from '../components/BottomNav';
import Saved from '../pages/general/Saved';
import CreateFood from '../pages/food-partner/CreateFood';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Home /><BottomNav /></>} />
        <Route path="/register" element={<ChooseRegister />} />
        <Route key="user-register" path="/user/register" element={<RegisterUser />} />
        <Route key="user-login" path="/user/login" element={<LoginUser />} />
        <Route key="food-partner-register" path="/food-partner/register" element={<FoodPartner />} />
        <Route key="food-partner-login" path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/" element={<><Home /><BottomNav /></>} />
        <Route path="/saved" element={<><Saved /><BottomNav /></>} />
        <Route path="/create-food" element={<CreateFood />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
