import React from 'react';
import { 
  DollarSign, 
  Users, 
  GraduationCap, 
  Droplets, 
  Heart, 
  Utensils,
  Accessibility
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Poverty Alleviation",
      description: "Providing financial assistance and support programs to help families break the cycle of poverty and achieve financial stability.",
      image: "https://images.pexels.com/photos/8926712/pexels-photo-8926712.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Users,
      title: "Support for Widows & Orphans",
      description: "Comprehensive care programs for widows and orphans, including housing, education, and emotional support services.",
      image: "https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: GraduationCap,
      title: "Education Programs",
      description: "Quality education initiatives for underprivileged children, including school supplies, scholarships, and learning resources.",
      image: "https://images.pexels.com/photos/8926635/pexels-photo-8926635.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Droplets,
      title: "Clean Water & Sanitation",
      description: "Installing water pumps, building sanitation facilities, and ensuring access to clean, safe drinking water for communities.",
      image: "https://images.pexels.com/photos/8926712/pexels-photo-8926712.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Heart,
      title: "Healthcare Services",
      description: "Mobile health clinics, medical camps, and healthcare programs to provide essential medical services to remote communities.",
      image: "https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Utensils,
      title: "Food Distribution",
      description: "Regular food distribution programs, emergency relief packages, and nutrition support for vulnerable families.",
      image: "https://images.pexels.com/photos/8926635/pexels-photo-8926635.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: Accessibility,
      title: "Disability Support",
      description: "Specialized programs and resources for individuals with disabilities, including mobility aids and rehabilitation services.",
      image: "https://images.pexels.com/photos/8926712/pexels-photo-8926712.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work across key social sectors to provide comprehensive support and create 
            lasting impact in the lives of those we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4">
                  <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center group">
                    Learn More
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;