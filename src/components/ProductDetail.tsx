import { ArrowLeft, Download, Mail, Calendar } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
}

interface ProductContent {
  title: string;
  subtitle: string;
  oneLinePitch: string;
  image: string;
  overview: string;
  learningOutcomes: string[];
  components: string[];
  specifications: { parameter: string; value: string }[];
  dataLogging: string[];
  applications: string[];
  safety: string[];
}

const productDetails: Record<string, ProductContent> = {
  'pem-electrolysis': {
    title: 'PEM Water Electrolysis Hydrogen Production & Storage Demonstration System',
    subtitle: 'A complete hands-on platform that demonstrates how water is converted into high-purity hydrogen, purified, and stored safely using modern PEM electrolysis technology.',
    oneLinePitch: 'Empowers students to understand the full green hydrogen workflow—from input water to stored hydrogen ready for use.',
    image: '/Electrolyzer kit.png',
    overview: 'This integrated demonstration system visualises the entire hydrogen production process using PEM (Proton Exchange Membrane) electrolysis. The platform includes pure-water circulation, real-time gas separation, multi-stage purification, and solid-state hydrogen storage. Designed for engineering colleges, universities, and R&D institutions, it provides a clear, safe, and highly interactive method to teach the fundamentals of green hydrogen production and storage.',
    learningOutcomes: [
      'Understand PEM electrolysis fundamentals',
      'Study gas–liquid separation and purification mechanisms',
      'Calculate hydrogen output rates and energy consumption',
      'Explore solid-state hydrogen storage behaviour',
      'Analyse efficiency, thermodynamics, and reaction kinetics',
      'Monitor real-time safety parameters and alarms',
      'Generate lab data for reports and research applications',
    ],
    components: [
      'Pure water tank & circulation system',
      'PEM electrolyzer stack',
      'Gas–liquid separator',
      'Dual-column purification system',
      'Solid-state hydrogen storage module (≥22 g capacity)',
      'PLC + HMI touchscreen interface',
      'Sensors: pressure, flow, water level, current, voltage',
      'Multi-level protection & alarms: overpressure, leakage, low water, overtemperature',
    ],
    specifications: [
      { parameter: 'Hydrogen Output', value: '~500 mL/min' },
      { parameter: 'Oxygen Output', value: '~250 mL/min' },
      { parameter: 'Electrolyzer Input', value: '9–12 V, 25 A' },
      { parameter: 'Hydrogen Purity', value: '≥99.99%' },
      { parameter: 'Storage Capacity', value: '>22 g' },
      { parameter: 'Storage Pressure', value: '≤1.6 MPa' },
      { parameter: 'Protection Features', value: 'Overpressure / low-water / leak detection / E-stop' },
    ],
    dataLogging: [
      'Voltage, current, power',
      'Water level and circulation status',
      'Hydrogen and oxygen flow',
      'Pressure and storage status',
      'Purification column status',
      'Safety interlocks and alarms',
      'Real-time sensor logging for lab reports (exportable)',
    ],
    applications: [
      'Energy engineering, chemical engineering, clean-tech programs',
      'Undergraduate laboratory courses',
      'MTech/MSc research projects',
      'Curriculum modules on electrolysis, hydrogen systems, and renewable energy storage',
      'Demonstrations for skill-development and hydrogen workforce training',
    ],
    safety: [
      'Solid-state hydrogen storage (no high-pressure cylinders)',
      'Automatic shutdown mechanisms',
      'Pressure-relief and leak protection',
      'Transparent piping and components for safe observation',
    ],
  },
  'fuel-cell': {
    title: 'Hydrogen Fuel Cell Power Generation Demonstration System',
    subtitle: 'A complete 200 W PEM fuel-cell power generation platform designed to teach hydrogen-to-electricity conversion, fuel cell control, and real-time system monitoring.',
    oneLinePitch: 'Demonstrate how stored hydrogen can be converted into electrical power using PEM fuel cell technology.',
    image: '/H2 fuel cell kit.png',
    overview: 'This system demonstrates how stored hydrogen can be converted into electrical power using a PEM fuel cell stack. With solid-state storage, intelligent FCU (Fuel Cell Unit) control, and dynamic load modules, the platform provides a practical, interactive understanding of fuel cell power generation. It includes real-time data acquisition, safety logic, and user-friendly controls suitable for teaching laboratories and applied research.',
    learningOutcomes: [
      'PEM fuel cell operating principles',
      'Hydrogen storage & delivery',
      'Fuel cell efficiency, polarization curves, and load response',
      'Power conditioning & voltage stabilization',
      'Real-time monitoring and fault detection',
      'Calculating hydrogen consumption & electrical output',
      'Safety protocols in hydrogen power systems',
    ],
    components: [
      '200 W PEM Fuel Cell Stack',
      'Solid-state hydrogen storage tank',
      'FCU safety & control unit',
      'Load modules (fan load, battery charging, resistive load)',
      'Voltage stabilization and inverter components',
      'Touch-screen HMI with live data',
      'Safety systems: leak detection, overpressure, emergency stop',
    ],
    specifications: [
      { parameter: 'Rated Power', value: '200 W' },
      { parameter: 'Rated Voltage', value: '19.8 V' },
      { parameter: 'Rated Current', value: '10.2 A' },
      { parameter: 'H₂ Consumption', value: '2.89 L/min (at rated power)' },
      { parameter: 'H₂ Purity Requirement', value: '≥99.99%' },
      { parameter: 'Fuel Cell Efficiency', value: '≥45%' },
      { parameter: 'Storage Type', value: 'Solid-state' },
    ],
    dataLogging: [
      'Stack voltage & current',
      'Power output',
      'Hydrogen consumption rate',
      'Pressure and tank temperature',
      'FCU operating state',
      'Load characteristics',
      'Fault alarms and safety triggers',
    ],
    applications: [
      'Electrical & energy engineering labs',
      'Courses on fuel cells, renewable power systems, hybrid systems',
      'Student projects on efficiency, load profiles, and fuel cell control',
      'Demonstrations of hydrogen-based microgrids & hybrid power',
    ],
    safety: [
      'Solid-state hydrogen storage ensures safe low-pressure operation',
      'Multi-level protection integrated in FCU',
      'Automatic shutdown during abnormal conditions',
      'Transparent layout for teaching safe H₂ handling',
    ],
  },
  'pv-hydrogen': {
    title: 'Photovoltaic Hydrogen Production Demonstration Kit',
    subtitle: 'A compact and visually engaging educational kit showcasing the complete cycle of solar energy → hydrogen → electrical power.',
    oneLinePitch: 'Designed for classrooms, engineering labs, and STEM programs to demonstrate renewable energy conversion.',
    image: '/Pv+E+FC .png',
    overview: 'This integrated PV–hydrogen demonstration kit shows how sunlight can be converted into hydrogen through a PEM electrolyzer and later transformed back into electricity using a miniature fuel cell. With transparent components and real-time observation features, it is ideal for teaching renewable energy conversion principles in a hands-on, intuitive format.',
    learningOutcomes: [
      'Basics of photovoltaic power generation',
      'How solar energy drives hydrogen production',
      'PEM electrolyzer operation principles',
      'Gas collection & storage measurement',
      'Fuel cell electricity generation',
      'Solar-to-hydrogen and hydrogen-to-electricity conversion efficiency',
    ],
    components: [
      'Photovoltaic solar panel',
      'PEM electrolyzer',
      'Transparent hydrogen and oxygen storage columns',
      'Miniature PEM fuel cell',
      'Visible pipelines & safety valves',
      'Measuring tools for gas volumes',
      'Loads for fuel cell output demonstration (LEDs/motors)',
    ],
    specifications: [
      { parameter: 'PV Module', value: 'High-efficiency silicon solar panel' },
      { parameter: 'Electrolyzer H₂ Output', value: '~60 mL/min' },
      { parameter: 'Fuel Cell Rated Power', value: '~1 W' },
      { parameter: 'Operating Temperature', value: 'Ambient (typ. 10–40°C)' },
      { parameter: 'Water Quality', value: 'Distilled/pure water' },
      { parameter: 'Pressure Range', value: 'Safe low-pressure educational system' },
    ],
    dataLogging: [
      'Measurement of solar panel voltage/current',
      'Gas production volume measurement',
      'Fuel cell output characteristics',
      'Real-time observation of H₂ and O₂ generation',
    ],
    applications: [
      'Renewable energy demonstrations',
      'School and university STEM programs',
      'Experiments on solar efficiency & electrolysis',
      'Introductory hydrogen technology courses',
      'Exhibitions, workshops, and public demonstrations',
    ],
    safety: [
      'Safe low-pressure operation',
      'No compressed gas cylinders',
      'Clear educational layout for visual understanding',
    ],
  },
};

export default function ProductDetail({ productId }: ProductDetailProps) {
  const product = productDetails[productId];

  if (!product) {
    return (
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => (window.location.hash = '#educational-products')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 mx-auto"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => (window.location.hash = '#educational-products')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-blue-700 font-semibold mb-4">{product.subtitle}</p>
              <p className="text-lg text-gray-700 mb-8">{product.oneLinePitch}</p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{product.overview}</p>
        </div>

        {/* Key Learning Outcomes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learning Outcomes</h2>
          <p className="text-gray-700 mb-6">Students and researchers can:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.learningOutcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="text-gray-700">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Components & Functions</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.components.map((component, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-gray-700">{component}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Parameter</th>
                  <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-900">Specification</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-6 py-3 font-semibold text-gray-900">{spec.parameter}</td>
                    <td className="border border-gray-300 px-6 py-3 text-gray-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Logging & Monitoring */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Measurement & Data Logging</h2>
          <p className="text-gray-700 mb-6">The system monitors and displays:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.dataLogging.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">→</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Teaching & Research Applications</h2>
          <p className="text-gray-700 mb-6">Ideal for:</p>
          <ul className="space-y-3">
            {product.applications.map((app, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-gray-700">{app}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safety & Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety & Compliance</h2>
          <p className="text-gray-700 mb-6">The system employs:</p>
          <ul className="space-y-3">
            {product.safety.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for pricing, customization, and training support</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Send Inquiry</span>
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Calendar size={20} />
              <span>Schedule Demo</span>
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
