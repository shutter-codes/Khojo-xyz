import React from 'react'

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src="https://images.unsplash.com/photo-1699190375905-3cac33bbdbb1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Task 01 siuuuu!!!</h1>
        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, et! Minima, pariatur doloremque impedit fugit eius similique deleniti? Accusantium deserunt dicta vero omnis, repellat quasi saepe quae asperiores expedita assumenda.</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  )
}

export default Hero
