import React from 'react'

import { NavLink } from 'react-router-dom'
const MemberShip = () => {
  return (
   <div className="py-20 bg-gray-100 min-h-screen">
  <h2 className="text-4xl font-bold text-center mb-12 mt-12">Membership Plans</h2>

  <div className="max-w-6xl mx-auto cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition text-center">
      <h3 className="text-2xl font-semibold mb-2">Basic Plan</h3>
      <p className="text-3xl font-bold mb-4">$29/mo</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>Access to gym equipment</li>
        <li>Locker facilities</li>
        <li>1 group class per week</li>
      </ul>
     <NavLink to='/membershipjoin'> 
          <button className="bg-indigo-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition">Join Now</button>   
      </NavLink>
    </div>

    
    <div className="bg-white p-6 hover:border hover:border-indigo-600  rounded-2xl shadow hover:shadow-lg transition text-center">
      <h3 className="text-2xl font-semibold mb-2">Standard Plan</h3>
      <p className="text-3xl font-bold mb-4">$49/mo</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>All gym equipment</li>
        <li>Unlimited group classes</li>
        <li>1 personal training session/month</li>
      </ul>
      <NavLink to='/membershipjoin'> 
          <button className="bg-indigo-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition">Join Now</button>   
      </NavLink>
    </div>

   
    <div className="bg-white p-6  hover:border hover:border-indigo-600  rounded-2xl shadow hover:shadow-lg transition text-center">
      <h3 className="text-2xl font-semibold mb-2">Premium Plan</h3>
      <p className="text-3xl font-bold mb-4">$79/mo</p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>All equipment & classes</li>
        <li>Unlimited personal training</li>
        <li>Nutrition guidance & wellness</li>
        <li>Spa/Recovery facilities</li>
      </ul>
          <NavLink to='/membershipjoin'> 
          <button className="bg-indigo-500 cursor-pointer text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition">Join Now</button>   
      </NavLink>
    </div>

  </div>
</div>
  )
}

export default MemberShip