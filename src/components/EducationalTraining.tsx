import { GraduationCap, FlaskConical, Users, CheckCircle, BookOpen, Award, Clock, Microscope, Zap, Droplets } from 'lucide-react';

export default function EducationalTraining() {
  const workshopFormats = [
    {
      title: '1-Day Workshop',
      subtitle: 'Introductory',
      duration: '1 Day',
      audience: 'Students and professionals seeking first exposure to hydrogen technologies',
      focus: [
        'Fundamental theory',
        'Live demonstrations and guided experiments',
        'Introduction to system operation, safety, and data interpretation',
        'No prior hydrogen or engineering experience required',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      icon: BookOpen,
    },
    {
      title: '2-Day Workshop',
      subtitle: 'Intermediate',
      duration: '2 Days',
      audience: 'Senior undergraduate students, postgraduate students, and faculty development programmes',
      focus: [
        'Expanded theoretical understanding',
        'Multiple experimental runs under varying conditions',
        'Comparative analysis and optimisation concepts',
      ],
      gradient: 'from-green-500 to-emerald-500',
      icon: Microscope,
    },
    {
      title: '3-Day Workshop',
      subtitle: 'Advanced',
      duration: '3 Days',
      audience: 'Research scholars, PhD candidates, and institutions developing hydrogen laboratories',
      focus: [
        'Advanced diagnostics and system behaviour',
        'Extended experimentation and data analysis',
        'Research-oriented testing methodologies',
        'Degradation, durability, and performance trade-offs',
      ],
      gradient: 'from-orange-500 to-red-500',
      icon: Award,
    },
  ];

  const fuelCellExperiments = [
    'Polarisation and power density curves',
    'Hydrogen starvation testing',
    'Air (oxygen) starvation testing',
    'Temperature sensitivity analysis',
    'Anode and cathode flow sensitivity tests',
    'Gas flow-rate optimisation',
    'Transient behaviour and fault indicators',
    'Membrane degradation studies',
    'Performance comparison with different catalyst loadings',
  ];

  const electrolyserExperiments = [
    'Polarisation curve and performance characterisation',
    'Hydrogen production rate calculations',
    'Energy efficiency and specific energy consumption analysis',
    'Water flow-rate sensitivity and optimisation',
    'Temperature and pressure sensitivity analysis',
    'Identification of optimal operating windows',
    'Membrane degradation and durability assessment',
    'Performance comparison with different catalyst loadings',
  ];

  const providedItems = [
    'Fuel cell and electrolyser training equipment',
    'Detailed laboratory manuals and experimental procedures',
    'Hydrogen safety manuals and best practices',
    'Sample datasets and report formats',
    'Structured testing protocols',
    'On-site expert trainers and technical facilitators',
  ];

  const beneficiaries = [
    { label: 'Undergraduate and postgraduate students', icon: GraduationCap },
    { label: 'Research scholars and PhD candidates', icon: Microscope },
    { label: 'Faculty members and technical staff', icon: Users },
    { label: 'Industry professionals and workforce training programmes', icon: Award },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl mb-6">
              <FlaskConical className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hydrogen Education & Hands-On Workshops
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bridge the gap between theory and practice with real hydrogen systems and industry-relevant testing methodologies
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            Hydrogen Network India offers hands-on educational workshops on hydrogen fuel cells and water electrolysers, designed to bridge the gap between theoretical understanding and real-world system operation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Our programmes are built for students, faculty, researchers, and industry professionals, and range from introductory sessions requiring no prior engineering or hydrogen background to advanced, research-oriented experimental training. Each workshop is delivered using real hydrogen systems and industry-relevant testing methodologies.
          </p>
        </div>
      </section>

      {/* Why Hands-On Training Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Why Hands-On Hydrogen Training?</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            Hydrogen technologies involve complex interactions between electrochemistry, thermal systems, fluid flow, and safety. Classroom instruction alone is often insufficient to develop true system-level understanding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Observe Real System Behaviour',
                description: 'Under varying operating conditions',
                icon: Zap,
              },
              {
                title: 'Understand Performance',
                description: 'Limitations and trade-offs',
                icon: FlaskConical,
              },
              {
                title: 'Gain Confidence',
                description: 'Working with hydrogen equipment',
                icon: CheckCircle,
              },
              {
                title: 'Develop Skills',
                description: 'Aligned with industry and research environments',
                icon: Award,
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshop Coverage Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Workshop Coverage</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Fuel Cell Training */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-3xl border border-blue-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fuel Cell Training</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Participants gain hands-on exposure to hydrogen fuel cell systems and perform structured experiments, including:
              </p>
              <ul className="space-y-3">
                {fuelCellExperiments.map((experiment, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{experiment}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Electrolyser Training */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Electrolyser Training</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Electrolyser workshops focus on hydrogen production, efficiency, and system optimisation through experiments such as:
              </p>
              <ul className="space-y-3">
                {electrolyserExperiments.map((experiment, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{experiment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Formats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Workshop Formats</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {workshopFormats.map((workshop, idx) => {
              const Icon = workshop.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-r ${workshop.gradient} p-8 text-white`}>
                    <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
                    <p className="text-lg opacity-90">{workshop.subtitle}</p>
                    <div className="mt-4 flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{workshop.duration}</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Best Suited For</h4>
                      <p className="text-gray-700 leading-relaxed">{workshop.audience}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3">Focus Areas</h4>
                      <ul className="space-y-2">
                        {workshop.focus.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Workshops Card */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Custom Workshops</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                In addition to standard formats, we offer custom-designed workshops tailored to institutional or organisational requirements. Programmes can be adapted in terms of duration, depth, equipment configuration, and learning outcomes.
              </p>

              <h4 className="text-xl font-bold mb-4">Customisation Options Include:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Fuel cells only, electrolysers only, or combined programmes',
                  'Audience-specific complexity (non-engineering to advanced research)',
                  'Integration with academic curricula or research objectives',
                  'Faculty enablement for long-term laboratory usage',
                ].map((option, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">What We Provide</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Each workshop is delivered as a complete turnkey programme, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providedItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Who Can Benefit?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beneficiaries.map((beneficiary, idx) => {
              const Icon = beneficiary.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{beneficiary.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Build Hydrogen Capability with Us
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Hydrogen Network India's workshops are designed to build sustainable hydrogen education and research capability, not just deliver one-time training sessions. Through hands-on experimentation and structured learning, institutions can prepare students and professionals for careers in the rapidly evolving hydrogen ecosystem.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-lg"
          >
            Contact Us for a Custom Workshop
            <FlaskConical className="ml-3 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
