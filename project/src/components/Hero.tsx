import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Users, GraduationCap } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Supporting Vulnerable Families",
      subtitle: "Bringing hope and dignity to those who need it most in Kashmir",
      icon: Heart
    },
    {
      image: "https://images.pexels.com/photos/8926635/pexels-photo-8926635.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Empowering Communities",
      subtitle: "Building stronger communities through education and healthcare",
      icon: Users
    },
    {
      image: "https://images.pexels.com/photos/8926712/pexels-photo-8926712.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Education for All",
      subtitle: "Providing quality education to underprivileged children",
      icon: GraduationCap
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <slide.icon className="h-16 w-16 mx-auto mb-6 text-orange-400" />
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Make a Donation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-20"
      >
        <ChevronLeft className="h-12 w-12" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-400 transition-colors z-20"
      >
        <ChevronRight className="h-12 w-12" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-orange-400' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Slogan Overlay */}
      <div className="absolute bottom-20 left-8 text-white z-20">
        <p className="text-xl font-light italic">"Help from the Heart"</p>
      </div>
    </section>
  );
};

export default Hero;