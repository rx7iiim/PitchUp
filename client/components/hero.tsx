'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-cyan-50">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 opacity-20 rounded-3xl -rotate-45"></div>
        <div className="absolute top-20 left-32 w-20 h-20 bg-orange-300 opacity-10 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300 opacity-15 rounded-3xl rotate-12"></div>
        
        {/* Circular lines */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 border-2 border-teal-600 opacity-10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 border border-teal-600 opacity-10 rounded-full"></div>
        
        {/* Decorative dots */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-gray-900 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gray-900 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-gray-900 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="text-teal-600 text-sm font-semibold tracking-widest uppercase mb-2">Welcome to</p>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            <span className="text-orange-400">PitchUp</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-teal-600 font-semibold mb-6">
          Think Fast. Break Down. PitchUp.
        </p>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join the ultimate hackathon experience where ideas come to life. Assemble your team, showcase your innovation, and compete for amazing prizes.
        </p>

        <div className="inline-block bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl px-8 py-6 text-white mb-8">
          <p className="text-4xl font-bold mb-2">Nov 20-22</p>
          <p className="text-lg">📍 Estin, Estonia</p>
        </div>

        <button className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-full hover:bg-teal-700 transition-colors shadow-lg">
          Register Your Team
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-600 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-teal-600 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
