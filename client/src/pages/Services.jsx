import React from 'react'

const Services = () => {
  return (
    <div className="py-20 bg-gray-100 min-h-screen">
  <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12 mt-12">Our Services</h2>
 

  <div className="max-w-6xl mx-auto grid cursor-pointer grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    
    
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Personal Training</h3>
      <p>One-on-one coaching with certified trainers and customized workout plans.</p>
    </div>

   
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Group Classes</h3>
      <p>Yoga, Zumba, Aerobics, Pilates, and strength/cardio classes.</p>
    </div>

        <div className="bg-white p-6 hover:border hover:border-indigo-600  rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Nutrition & Diet Plans</h3>
      <p>Personalized meal plans and nutrition counseling for weight loss or gain.</p>
    </div>

    
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Weight Training</h3>
      <p>Access to free weights, machines, and muscle-building programs.</p>
    </div>

    
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Cardio Training</h3>
      <p>Treadmills, ellipticals, rowing machines, and HIIT sessions.</p>
    </div>


    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Functional Training</h3>
      <p>CrossFit, TRX, kettlebells, and core/movement-focused workouts.</p>
    </div>

   
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Body Composition Analysis</h3>
      <p>Measure body fat, muscle mass, and BMI to track your fitness progress.</p>
    </div>

  
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Wellness & Recovery</h3>
      <p>Sauna, steam room, massage, and stretching programs for recovery.</p>
    </div>

 
    <div className="bg-white p-6 hover:border hover:border-indigo-600 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-2">Kids & Teen Programs</h3>
      <p>Fun and safe fitness programs designed specifically for young ages.</p>
    </div>

  </div>
</div>

  )
}

export default Services