import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 'pem-electrolysis',
    title: 'PEM Water Electrolysis Hydrogen Production & Storage Demonstration System',
    description: 'Integrated PEM electrolysis platform that visualises the full workflow from pure water to purified, solid-state stored hydrogen—ideal for teaching green hydrogen production fundamentals.',
    image: '/Electrolyzer kit.png',
  },
  {
    id: 'fuel-cell',
    title: 'Hydrogen Fuel Cell Power Generation Demonstration System',
    description: '200 W PEM fuel cell teaching system with solid-state storage, intelligent control, and real-time monitoring to demonstrate hydrogen-to-electricity conversion.',
    image: '/H2 fuel cell kit.png',
  },
  {
    id: 'pv-hydrogen',
    title: 'Photovoltaic Hydrogen Production Demonstration Kit',
    description: 'Compact PV–electrolyzer–fuel cell kit that demonstrates the full "solar → hydrogen → electricity" cycle using transparent components and real-time indicators.',
    image: '/Pv+E+FC .png',
  },
];

export default function EducationalProducts() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Educational Products
              </h1>
              <p className="text-2xl text-blue-700 font-semibold mb-4">
                Hands-on hydrogen lab systems and demonstration kits designed for universities, engineering colleges, and R&D labs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our turnkey platforms cover PEM electrolysis, fuel cell power generation, and photovoltaic–hydrogen integration, aligned with modern curriculum and industry skill standards.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Request Demo
                </button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">⚛️</div>
                <p className="text-gray-600 font-semibold">Hydrogen Technology Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Educational Systems
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each system is engineered for hands-on learning, providing students and researchers with practical insights into hydrogen technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => (window.location.hash = `#product/${product.id}`)}
            >
              {/* Product Image */}
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* View Product Button */}
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.location.hash = `#product/${product.id}`;
                  }}
                >
                  <span>View Product</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Lab?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to learn more about our educational hydrogen systems and demonstration kits.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Request Information
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
