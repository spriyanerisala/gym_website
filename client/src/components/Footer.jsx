import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        <div class="sm:col-span-2 lg:col-span-1">
            <a>
               <h1 className='text-5xl text-indigo-600' >GYM</h1>
            </a>
            <p class="text-sm/7 mt-6">Gym is a free and open-source UI component library with over 300+ beautifully crafted, customizable components built with Tailwind CSS.</p>
        </div>
        <div class="flex flex-col lg:items-center lg:justify-center">
            <div class="flex flex-col text-sm space-y-2.5">
                <h2 class="font-semibold mb-5 text-gray-800">Company</h2>
                <a class="hover:text-slate-600 transition" href="#">About us</a>
                <a class="hover:text-slate-600 transition" href="#">Careers</a>
                <a class="hover:text-slate-600 transition" href="#">Contact us</a>
                <a class="hover:text-slate-600 transition" href="#">Privacy policy</a>
            </div>
        </div>
        <div>
            <h2 class="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
            <div class="text-sm space-y-6 max-w-sm">
                <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div class="flex items-center justify-center gap-2 p-2 rounded-md bg-indigo-50">
                    <input class="focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 py-2 rounded px-2" type="email" placeholder="Enter your email" />
                    <button class="bg-indigo-600 px-4 py-2 text-white rounded">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    <p class="py-4 text-center border-t mt-6 border-slate-200">
        Copyright 2025 © <NavLink to='/'>GYM</NavLink> All Right Reserved.
    </p>
    </div>
  )
}

export default Footer