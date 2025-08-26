import React from 'react';
import { Users, GraduationCap, Home, Heart } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "25,000+",
      label: "Lives Touched",
      description: "Individuals and families supported through our programs"
    },
    {
      icon: GraduationCap,
      number: "5,000+",
      label: "Children Educated",
      description: "Underprivileged children provided with quality education"
    },
    {
      icon: Home,
      number: "1,200+",
      label: "Families Supported",
      description: "Vulnerable families receiving ongoing assistance"
    },
    {
      icon: Heart,
      number: "15+",
      label: "Years of Service",
      description: "Dedicated years of serving Kashmir communities"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Every number tells a story of hope, transformation, and lives changed through 
            our dedicated humanitarian efforts across Kashmir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
              <stat.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-blue-100 mb-2">{stat.label}</div>
              <p className="text-blue-200 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Making a Real Difference
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Our work spans across multiple sectors, from providing immediate relief to 
                building long-term sustainable solutions. Each initiative is carefully designed 
                to address the root causes of poverty and vulnerability while restoring dignity 
                and hope to those we serve.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                Through the generous support of donors and volunteers, we continue to expand 
                our reach and deepen our impact in communities across Kashmir.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8926635/pexels-photo-8926635.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kashmir Foundation impact"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 bg-opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
          <p className="text-blue-100 mb-6">Be part of the change. Every contribution makes a difference.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Making Impact Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;