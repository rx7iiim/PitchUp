"use client";

export default function RegistrationClosed() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-cyan-50" />

      {/* Left geometry */}
      <div className="absolute left-0 top-0 pointer-events-none hidden sm:block sm:w-48 md:w-80 lg:w-96">
        <img
          src="/Group%202838.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
      </div>

      {/* Right bottom geometry */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-80 hidden sm:block sm:w-40 md:w-72 lg:w-96">
        <img
          src="/Group%202840.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
      </div>

      {/* Top-right accent */}
      <div className="absolute top-4 right-4 pointer-events-none opacity-60 hidden sm:block sm:w-20 md:w-32 lg:w-48">
        <img
          src="/Group%202841.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden
        />
      </div>

      {/* Concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute rounded-full border border-cyan-200/30 w-40 sm:w-60 md:w-80 lg:w-[28rem] h-40 sm:h-60 md:h-80 lg:h-[28rem]" />
        <div className="absolute rounded-full border border-cyan-200/20 w-56 sm:w-80 md:w-[24rem] lg:w-[34rem] h-56 sm:h-80 md:h-[24rem] lg:h-[34rem]" />
        <div className="absolute rounded-full border border-cyan-200/10 w-72 sm:w-[28rem] md:w-[36rem] lg:w-[42rem] h-72 sm:h-[28rem] md:h-[36rem] lg:h-[42rem]" />
      </div>

      {/* Circuit icons */}
      <div className="absolute top-16 right-6 sm:right-20 w-28 sm:w-40 opacity-70 hidden sm:block">
        <img
          src="/Group%202836.png"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden
        />
      </div>

      <div className="absolute bottom-20 left-4 sm:bottom-32 sm:left-8 w-28 sm:w-40 opacity-70 hidden sm:block">
        <img
          src="/Group%202837.png"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden
        />
      </div>

      {/* Decorative icons */}
      <div className="absolute top-1/3 left-6 sm:left-12 w-16 sm:w-24 opacity-80 hidden sm:block">
        <img
          src="/pic-2.png"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden
        />
      </div>

      <div className="absolute top-1/4 right-8 sm:right-16 w-16 sm:w-24 opacity-80 hidden sm:block">
        <img
          src="/pic.png"
          alt=""
          className="w-full h-full object-contain"
          aria-hidden
        />
      </div>

      {/* Sparkles */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl text-black opacity-40">
        ✦
      </div>
      <div className="absolute top-44 right-1/3 text-lg sm:text-xl text-black opacity-30 hidden sm:block">
        ✦
      </div>
      <div className="absolute bottom-44 left-1/3 text-lg text-black opacity-30 hidden md:block">
        ✦
      </div>
      <div className="absolute bottom-36 right-1/4 text-xl text-black opacity-30 hidden sm:block">
        ✦
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-6 py-16 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Logo */}
        <div className="mb-6 flex items-center justify-center h-44 sm:h-56 md:h-72">
          <img
            src="/Group%202828.png"
            alt="PitchUp Logo"
            className="h-full object-cover"
          />
        </div>

        {/* Text logo */}
        <div className="mb-8 -mt-8">
          <img
            src="/PitchUp.png"
            alt="PitchUp Text"
            className="h-14 sm:h-20 md:h-24 mx-auto"
          />
        </div>

        {/* CLOSED Message */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-red-600 mb-4 drop-shadow">
          Registration Closed
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 max-w-xl">
          Thank you for your interest! Team registration for PitchUp 2025 is now
          officially closed.
        </p>

        {/* Small info box */}
        <div className="mt-8 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl px-6 py-3 shadow-lg">
          <p className="text-sm sm:text-lg md:text-xl font-bold">
            Event has been cancelled
          </p>
        </div>
      </div>
    </section>
  );
}
