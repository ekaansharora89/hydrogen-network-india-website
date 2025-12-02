import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            India's #1 Hydrogen Solutions Company
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 mb-12 font-light">
            Advancing Green Hydrogen Hubs Of India
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              Get a Consultation
              <Phone className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 group"
            >
              Explore Programs
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Trained Professionals</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Energy Projects</div>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <div className="text-gray-600">Clean Energy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
