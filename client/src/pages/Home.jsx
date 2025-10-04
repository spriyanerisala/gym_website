import React from 'react'
import gym_background from '../assets/gym_background.jpeg'
import gym_side_pic from '../assets/gym_side_pic.jpeg'

const Home = () => {
  return (
    <div 
      className="relative min-h-screen  bg-cover bg-center bg-no-repeat flex items-center justify-center" 
      style={{ backgroundImage: `url(${gym_background})` }}
    > 
     
      <div className="absolute inset-0 bg-black/50"></div>

     
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center md:grid md:grid-cols-2 md:gap-10 px-4">

       
        <div className="flex items-center justify-center md:justify-start mb-30 md:mb-0">
          <h2 className="text-4xl sm:text-5xl  md:text-6xl lg:text-7xl text-white font-extrabold tracking-widest text-center md:text-left">
            Welcome to <br/>
            <span className="tracking-widest text-orange-500">Fitness</span><br/>
            <span className="tracking-widest text-blue-600">Gym</span>
          </h2>
        </div>

        
        <div className="flex items-center justify-center">
          <img  
            src={gym_side_pic}
            alt="Gym Side"
            className="h-[200px] sm:h-[250px] md:h-[400px] lg:h-[600px] lg:mt-[15%] rounded-full lg:rounded-2xl hover:-translate-y-2 transition-all cursor-pointer ease-in-out"
          />
        </div>

      </div>
    </div>
  )
}

export default Home

