import { BrowserRouter } from "react-router-dom";
import {  Navbar,  About, Experience,Hero, Feedbacks,
  Tech, Works, StarsCanvas, Contact
}  from './components';
// import './App.css'

function App() {
 

  return (
     <BrowserRouter>
       <div className="relative z-0 bg-primary" >
            
           <div className="bg-hero-pattern bg-cover
            bg-no-cover bg-center"  >
               
                <Navbar/>
                <Hero/>
           </div>
           {/* <Experience/>
           <About/>
           <Tech/>
           <Works/>
           <Feedbacks/> */}
            {/* <div className="relative z-0" >
              <Contact/>
              <StarsCanvas/>
            </div> */}
       </div>
       
     </BrowserRouter> 

  )
}

export default App
