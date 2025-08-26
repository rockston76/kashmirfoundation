import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Kashmir Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A non-profit, non-governmental organization committed to serving vulnerable 
            communities across Kashmir with depth of heart and unwavering dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/8926549/pexels-photo-8926549.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Kashmir Foundation helping communities"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kashmir Foundation has been actively serving with depth of heart, dedicated to 
              supporting poor families, widows, orphans, individuals with disabilities, and 
              other vulnerable people in need. Our mission is to bring hope, dignity, and 
              support to those who are helpless and overlooked.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through schools, hospitals, and community programs, we strive to uplift lives, 
              restore dignity, and build a better future for those in need. Every initiative 
              we undertake is driven by compassion and the belief that no one should be left behind.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Target className="h-16 w-16 text-blue-700 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <p className="text-gray-700 leading-relaxed">
              To bring hope, dignity, and support to vulnerable communities across Kashmir 
              through comprehensive humanitarian programs and community development initiatives.
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Eye className="h-16 w-16 text-blue-700 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
            <p className="text-gray-700 leading-relaxed">
              A world where every individual, regardless of their circumstances, has access 
              to basic human rights, dignity, and opportunities for a better future.
            </p>
          </div>
          
          <div className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Heart className="h-16 w-16 text-blue-700 mx-auto mb-4 fill-current" />
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h4>
            <p className="text-gray-700 leading-relaxed">
              Compassion, integrity, transparency, and unwavering commitment to serving 
              those who need it most. We believe in helping from the heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;