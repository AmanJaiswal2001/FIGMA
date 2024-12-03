import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Footer from './Components/Footer/Footer';
import Section from './Components/section/Section';
 import Signin from './Components/Users/SignIn';
import Navigation from './Components/Panel/Navigation';
import Two from './Components/Pages/Two';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addcard from './Components/Testimonials/Addcard';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/two" element={<Two />} />
        <Route path="/cards" element={<Addcard />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
    {/* {/* <Footer/> */} 
    <Section/>
    </>
  )
}

export default App
