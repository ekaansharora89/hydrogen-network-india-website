import { ArrowRight, Zap, Grid3x3 } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  bullets: string[];
  image: string;
  gradientFrom: string;
  gradientTo: string;
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    id: 'drones',
    title: 'Hydrogen Fuel Cell Drones & Mobile Electrolyser-Refuelling Module',
    shortDescription: 'Unlocking high-endurance drone operations: 2–3 hr flight endurance, fast field refuelling, and on-site hydrogen generation.',
    bullets: [
      '2–3 hour endurance',
      'Fast refuelling <3 min',
      'Mobile solar-assisted electrolyser',
      'Reduced logistics',
    ],
    image: '/H2 fuel cell kit.png',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-cyan-500',
    icon: <Zap size={32} className="text-white" />,
  },
  {
    id: 'nanogrids',
    title: 'Hydrogen Nanogrids',
    shortDescription: 'On-demand clean energy for 24×7 uptime — modular PV + BESS + fuel cell systems for remote and mission-critical sites.',
    bullets: [
      'True 24×7 autonomy',
      '1–20 kW modular scale',
      'EMS for intelligent dispatch',
      'Rapid containerized deployment',
    ],
    image: '/Pv+E+FC .png',
    gradientFrom: 'from-green-500',
    gradientTo: 'to-emerald-500',
    icon: <Grid3x3 size={32} className="text-white" />,
  },
];

export default function Products() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleLearnMore = (productId: string) => {
    window.location.hash = `#product/${productId}`;
  };

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Hydrogen Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced hydrogen technology platforms for high-endurance operations and autonomous energy systems
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Top Gradient Band */}
                <div
                  className={`bg-gradient-to-r ${product.gradientFrom} ${product.gradientTo} px-8 py-12 flex items-center justify-between`}
                >
                  <h2 className="text-3xl font-bold text-white leading-tight flex-1">
                    {product.title}
                  </h2>
                  <div className="ml-6 flex-shrink-0">{product.icon}</div>
                </div>

                {/* Card Body - Collapsible on desktop hover */}
                <div
                  className={`flex-1 flex flex-col transition-all duration-500 ${
                    hoveredCard === product.id
                      ? 'opacity-0 h-0 overflow-hidden'
                      : 'opacity-100 h-auto'
                  }`}
                >
                  {/* Image */}
                  <div className="h-56 bg-gray-100 overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description and Bullets */}
                  <div className="flex-1 p-8 flex flex-col">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {product.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Always visible footer with Learn More button */}
                <div
                  className={`px-8 pb-8 transition-all duration-500 ${
                    hoveredCard === product.id ? 'pt-8' : 'pt-4'
                  }`}
                >
                  <button
                    onClick={() => handleLearnMore(product.id)}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center space-x-2 group/btn shadow-md hover:shadow-lg"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={20}
                      className="group-hover/btn:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to learn how our hydrogen solutions can power your next-generation applications
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
