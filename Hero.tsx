import React from 'react';
import { ArrowRight, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-800">Find Psychiatrist Online</span> - 
                <span className="text-blue-800 block">
                  Book Appointment Today
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                North Carolina telepsychiatry services - Same-day ADHD treatment, depression therapy, 
                and anxiety help. Licensed psychiatrists near you. Schedule online psychiatric 
                consultation from home. Insurance accepted including BCBS NC, Aetna, United.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">HIPAA Secure</h3>
                  <p className="text-sm text-gray-600">Fully compliant</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-green-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Same Day</h3>
                  <p className="text-sm text-gray-600">Appointments</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Licensed</h3>
                  <p className="text-sm text-gray-600">Psychiatrists</p>
                </div>
              </div>
            </div>

            {/* Hero CTA Section */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                <a
                  href="https://www.pinnaclebhw.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => (window as any).trackCTAClick?.('Hero Main Site')}
                  className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 font-bold flex items-center justify-center space-x-2 group relative overflow-hidden text-lg"
                >
                  <span className="relative z-10">📅 Visit Our Main Site - Same-Day Appointments Available</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              <p className="text-gray-700 text-center">
                Complete services, provider info, and online booking at{' '}
                <a 
                  href="https://www.pinnaclebhw.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-bold text-blue-800 hover:text-blue-900 underline"
                >
                  www.pinnaclebhw.com
                </a>
              </p>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                onClick={() => (window as any).trackCTAClick?.('Hero Contact')}
                className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-200 font-semibold text-center"
              >
                Get Information
              </a>
              <a
                href="tel:+13368282599"
                onClick={() => (window as any).trackPhoneCall?.()}
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 font-semibold text-center"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>📞 Call (336) 828-2599</span>
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">Same Day</span>
                </span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-600">500+ patients treated</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>

            {/* Service areas with SEO-optimized text */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Online psychiatrist serving North Carolina cities:</p>
              <p className="text-gray-700 font-medium">
                Raleigh psychiatrist • Charlotte telepsychiatry • Durham mental health • Greensboro ADHD treatment • Winston-Salem • Asheville • Wilmington • Cary
              </p>
              <div className="mt-4">
                <a 
                  href="https://www.pinnaclebhw.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more about our comprehensive behavioral health services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Local Search Optimization */}
            <div className="text-xs text-gray-400 leading-relaxed">
              Find psychiatrist near me • Online psychiatrist North Carolina • Telepsychiatry NC • 
              ADHD doctor online • Depression treatment telehealth • Anxiety therapy virtual • 
              Mental health consultation online • Psychiatric medication management • Same day psychiatrist appointment
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1659353889203-0cf1be5cf4e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Online psychiatrist consultation - telehealth mental health care North Carolina"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Available Now</h4>
                  <p className="text-sm text-gray-600">Licensed psychiatrists ready to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;