import { FileText, Video, Download, ExternalLink } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: FileText,
      title: 'Technical Whitepapers',
      description: 'In-depth research on hydrogen technology and green energy solutions',
      count: '15+ Documents',
    },
    {
      icon: Video,
      title: 'Webinar Recordings',
      description: 'Expert talks on hydrogen production and fuel cell technology',
      count: '25+ Videos',
    },
    {
      icon: Download,
      title: 'Case Studies',
      description: 'Real-world implementations of hydrogen energy systems',
      count: '10+ Studies',
    },
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our library of technical documentation and educational materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <resource.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {resource.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {resource.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-blue-600">{resource.count}</span>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
