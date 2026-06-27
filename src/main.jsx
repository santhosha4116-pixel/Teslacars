import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Model3 from './assets/model3.png'
import ModelS from './assets/Model S.png'
import ModelX from './assets/Model X.png'
import ModelY from './assets/Model Y.png'
import tesla from './assets/Tesla Roadster.png'
import cyber from './assets/Cyber.png'
import Navbar from './Navbar'


function Productcard(detail){
  return(
   <div className='text-center bg-black mt-8 mr-2.5 ml-2.5 p-5 text-white rounded-3xl'>
        <img src = {detail.image} className='w-[80%] mx-auto  m-2 rounded-3xl'></img>
        <h1 className='text-2xl font-extrabold'>{detail.name}</h1>
        <p>{detail.descr}</p>
     </div>
  )
}
var Car=[
  {
    image: Model3,
    name:"Model 3",
    descr:"The Tesla Model 3 is a premium mid-size electric sedan renowned for its minimalist design, exceptional range, and athletic handling. Globally praised for its tech-forward cabin and aerodynamic styling, it remains one of the most popular and value-driven electric vehicles on the market."
  },
   {
    image: ModelS,
    name:"Model S",
    descr:"The Tesla Model S is a flagship luxury electric sedan known for its blistering performance, long-range capabilities, and minimalist tech-driven interior. It features a peak power of 1,020 hp, accelerates from 0-60 mph in 1.99 seconds, and is expected to launch in India soon."
  },
   {
    image: ModelX,
    name:"Model X",
    descr:"The Tesla Model 3 is a premium mid-size electric sedan renowned for its minimalist design, exceptional range, and athletic handling. Globally praised for its tech-forward cabin and aerodynamic styling, it remains one of the most popular and value-driven electric vehicles on the market.The Tesla Model X is a luxury, all-electric mid-size crossover SUV featuring distinctive Falcon Wing rear doors, a tri-row interior, and an estimated range of up to 352 miles."
   },
     {
    image: ModelY,
    name:"Model Y",
    descr:"The Tesla Model Y is a popular, all-electric family SUV.It features a minimalist, roomy cabin with high-tech screens and great safety ratings. You can get it as a 5-seater or a 6-seater. It has an electric driving range of up to 681 kilometers."
  },
     {
    image: tesla,
    name:"Tesla Roadster",
    descr:"The Tesla Roadster is an upcoming, highly anticipated all-electric halo supercar with a projected base price of $200,000 and up to $250,000 for limited-run Founders series models. Though it was first unveiled as a prototype in 2017, the production version remains in development with expected deliveries to follow the upcoming demo."
  },
     {
    image: cyber,
    name:"Model 3",
    descr:"The Tesla Cybertruck is a futuristic, all-electric full-size pickup truck featuring an unpainted stainless-steel exoskeleton, steer-by-wire technology, and a standard all-wheel-drive setup. Pricing starts around $80,000 for standard variants and reaches well over $100,000 for the top-tier Cyberbeast model, which boasts up to 845 horsepower and a 0 to 100 km/h time of 2.8 seconds"
  },

]
const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <>
    <Navbar></Navbar>
    <div className='grid grid-cols-3 gap-8 max-sm:grid max-sm:grid-cols-1 max-lg:grid max-lg:grid-cols-2'>
    
    {
  Car.map(function(item)
{
  return (
     
      <Productcard image={item.image} name={item.name} descr={item.descr}></Productcard>
    
  )

}) 
    }
    </div>
    </>
  </StrictMode>
)
