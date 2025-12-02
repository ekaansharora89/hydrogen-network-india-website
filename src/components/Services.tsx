import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Professional Training Programs',
      description: 'Comprehensive hydrogen technology training for professionals and engineers entering the green energy sector.',
    },
    {
      icon: Users,
      title: 'Industrial Workshops',
      description: 'Hands-on workshops covering hydrogen production, storage, and fuel cell applications for industrial teams.',
    },
    {
      icon: BookOpen,
      title: 'Educational Partnerships',
      description: 'Collaborating with institutions to integrate hydrogen technology into academic curricula.',
    },
    {
      icon: Award,
      title: 'Certification Programs',
      description: 'Industry-recognized certifications in hydrogen safety, fuel cell technology, and green energy systems.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Education & Industrial Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering India's workforce with cutting-edge hydrogen technology knowledge and practical skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
