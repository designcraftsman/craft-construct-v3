import React , {useEffect,useState} from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarLight';
import HeroSection from '../../components/home/homeV1/HeroSection';
import AboutSection from '../../components/home/homeV1/AboutSection';
import ServicesSection from '../../components/home/homeV1/ServicesSection';
import PortfolioList from '../../components/home/homeV1/PortfolioSection';
import TestimonialsSection from '../../components/home/homeV1/TestimonialsSection';
import BlogSection from '../../components/home/homeV1/BlogSection';

function App() {


  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <section className="latest-projects p-lg-5 p-2 reveal" >
   
        <div className="d-flex justify-content-between flex-wrap align-items-center mb-4">
          <h2 className="fw-bolder fs-1 my-5">Our Latest Projects</h2>
          <button  className="btn btn-dark  hover-filled-slide-down d-lg-block d-none  ">
            <span>View All Projects</span>
            </button>
        </div>
        
        <PortfolioList />
        <button  className="btn btn-dark  hover-filled-slide-down d-lg-none d-block w-100 my-5  ">
            <span>View All Projects</span>
            </button>
      </section>
      <TestimonialsSection />
      <BlogSection />
     
    </div>
  );
}

export default App;
