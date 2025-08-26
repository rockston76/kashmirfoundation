import React from 'react';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "12-Saddar Road, Samdani Plaza, 1st Floor, Peshawar Cantt"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+92-345-9138857"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "help@kashmirfoundation.org"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.kashmirfoundation.org"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Contact us to learn more about our programs, 
            volunteer opportunities, or how you can contribute to our mission.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <info.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 break-words">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-700 p-8 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
              <p className="text-blue-100 mb-4">
                For urgent humanitarian assistance or emergency situations, 
                please contact us immediately.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Emergency Contact
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunity</option>
                      <option>Donation Information</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help you or how you'd like to get involved..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Subscribe to our newsletter for updates on our humanitarian work
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white p-12 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join us in our mission to bring hope and support to vulnerable communities across Kashmir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Donate Now
            </button>
            <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;