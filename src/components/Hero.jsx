
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/100 via-primary-800/200 to-primary-700/60"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce-slow">🍕</div>
      <div className="absolute top-40 right-20 text-4xl opacity-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🍔</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}>🍜</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>🥗</div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12 pt-12 animate-fade-in">
          Delicious Food
          <span className="block text-yellow-300">Delivered Fresh</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up">
          Experience the finest HeyBuddy delights crafted with love and served with passion.
          From farm to table, we bring you the freshest ingredients and authentic flavors.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a href="#menu" className="btn-secondary text-lg px-8 py-4 inline-block">
            View Menu
          </a>
          <a href="#contact" className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg inline-block">
            Order Now
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in pb-12" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-lg opacity-90">Delicious Dishes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">5★</div>
            <div className="text-lg opacity-90">Average Rating</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
