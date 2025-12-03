import Header from './components/Header';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import Services from './components/Services';
import EnergySystems from './components/EnergySystems';
import Resources from './components/Resources';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <Services />
        <EnergySystems />
        <Resources />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
