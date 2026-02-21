import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'Advanced Simulation Tools in the Green Hydrogen Economy: Optimizing Plant Operation & Fast-Tracking R&D',
      excerpt: 'Simulation tools—spanning multiphysics CFD, process modelling, 1D system simulation, and full plant digital twins—now sit at the heart of successful hydrogen projects globally. Their impact is most visible across two domains: electrolyzer operations and fuel-cell system design.',
      date: 'Dec 5, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://h2network.beehiiv.com/p/advanced-simulation-tools-in-the-green-hydrogen-economy-optimizing-plant-operation-fast-tracking-r-d',
    },
    {
      title: 'Efficiency of PEM Electrolyzers & the Real Cost of Green Hydrogen in India',
      excerpt: 'Electrolysis may seem simple — splitting water into hydrogen and oxygen — but behind every kilogram of green hydrogen lies a deep interplay between physics, efficiency, and economics. In India, PEM electrolyzers typically consume 50–55 kWh per kg of H₂, with electricity contributing 70–80% of the total production cost.',
      date: 'Oct 14, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://h2network.beehiiv.com/p/efficiency-of-pem-electrolyzers-the-real-cost-of-green-hydrogen-in-india',
    },
    {
      title: 'India-Japan JCM: Unlocking Article 6.2 Pathways for Indian P2X Exports',
      excerpt: 'India and Japan\'s new JCM pact creates India\'s first bilateral carbon market mechanism, enabling P2X projects to pair hydrogen exports with ITMO-based revenue. The agreement shifts the model from pure commodity arbitrage to a dual-revenue structure combining hydrogen exports with Internationally Transferred Mitigation Outcomes monetization.',
      date: 'Nov 18, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      url: 'https://h2network.beehiiv.com/p/india-japan-jcm-unlocking-article-6-2-pathways-for-indian-p2x-exports',
    },
  ];

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => (window.location.hash = '#home')}
            className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Stay updated with the latest trends, developments, and innovations in hydrogen technology and green energy solutions
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100"
                onClick={() => window.open(post.url, '_blank')}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Subscribe to our newsletter for the latest hydrogen technology insights and industry news
          </p>
          <a
            href="https://h2network.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-2xl hover:bg-gray-50 transition-all duration-300 text-lg"
          >
            Subscribe to Newsletter
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
