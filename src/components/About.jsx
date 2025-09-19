// import featureImg from '../assets/about/feature.jpg';
// import floatingStew from '../assets/about/floating-stew.png';
// import floatingHerb from '../assets/about/floating-herb.png';
// import iconSustainability from '../assets/icons/sustainability.png';
// import iconQuality from '../assets/icons/quality.png';
// import iconCommunity from '../assets/icons/community.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Story & Passion
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2020, TasteBud began as a small family restaurant with a big dream: 
              to bring authentic, delicious food to our community. What started in a tiny kitchen 
              has grown into a beloved local institution.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that great food brings people together. Every dish is prepared with 
              fresh, locally-sourced ingredients and crafted with techniques passed down through 
              generations. Our chefs combine traditional recipes with modern innovation to create 
              unforgettable flavors.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">👨‍🍳</div>
                <div className="text-2xl font-bold text-primary-500">15+</div>
                <div className="text-gray-600">Expert Chefs</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-bold text-primary-500">25+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>

            <a href="#about"><button className="btn-primary mt-6">
              Learn More About Us
            </button></a>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Fresh & Authentic</h3>
                <p className="text-gray-600">Every ingredient tells a story</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-3xl">🥘</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-3xl">🌿</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌱</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h4>
              <p className="text-gray-600">
                We source ingredients from local farms and use eco-friendly packaging to protect our planet.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">❤️</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality</h4>
              <p className="text-gray-600">
                Every dish is prepared with love and attention to detail, ensuring the highest quality experience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
              <p className="text-gray-600">
                We're proud to be part of this community and give back through local partnerships and events.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
