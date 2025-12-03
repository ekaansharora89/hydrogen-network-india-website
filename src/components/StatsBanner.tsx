export default function StatsBanner() {
  const stats = [
    { number: '500+', label: 'Professionals Trained' },
    { number: '50+', label: 'Projects Delivered' },
    { number: '15+', label: 'Industry Partners' },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
