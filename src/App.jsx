import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/hero";
import Promo from "./components/promo/promo";
import Categories from "./components/categories/categories";
import Recoment from "./components/recoment/recoment";
import Benner from "./components/benner/benner";
import Leaderboards from "./components/leaderboards/leaderboards";
import Compare from "./components/compare/compare";
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/login';
import Signup from "./components/signup/signup";

const App = () => {
  return (
    <Router>
   <main className='overflow-x-hidden bg-white text-dark'>
    <Routes>
      <Route path='/' element={
      <>
    <Hero />
    <Promo />
    <Categories />
    <Recoment />
    <Benner />
    <Leaderboards />
    <Compare />
    <Cta />
    <Footer />
     </>
    } />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    </Routes>
   </main>
   </Router>
  )
}

export default App
