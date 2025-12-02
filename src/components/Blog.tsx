import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'The Future of Green Hydrogen in India',
      excerpt: 'Exploring the potential of hydrogen energy to transform India\'s energy landscape and achieve carbon neutrality goals.',
      date: 'Nov 28, 2025',
      category: 'Industry Insights',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Fuel Cell Technology: A Beginner\'s Guide',
      excerpt: 'Understanding the fundamentals of fuel cells and their applications in modern energy systems.',
      date: 'Nov 25, 2025',
      category: 'Education',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Success Story: Hydrogen Microgrid Implementation',
      excerpt: 'How we helped a manufacturing facility achieve energy independence with hydrogen-powered microgrids.',
      date: 'Nov 20, 2025',
      category: 'Case Study',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends and developments in hydrogen technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
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
  );
}
