"use client";

export default function About() {
  return (
    <section className="w-full py-16 px-4 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            About <span className="text-orange-500">PitchUp</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What is PitchUp?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                PitchUp is a three-day hackathon taking place from November 20th
                to 22nd at ESTIN Béjaïa. This hackathon is one of the key
                activities of La Semaine Mondiale de l&apos;Entrepreneuriat,
                organized by Bytecraft in collaboration with ESTIN.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                The Challenge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The event gives participants the opportunity to explore,
                analyze, and solve proposed real-world problems through digital
                and innovative solutions.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How It Works
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Participants will work in teams of 3-5, collaborating to build a
                functional and impactful project. The experience will conclude
                with a final presentation delivered to the jury.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Registration Info
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Registrations open today, November 17, and will close on
                Wednesday at 19:00. Join us and be part of this exciting
                entrepreneurial and technological journey!
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-8 rounded-lg border border-teal-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-teal-600 mb-1">3</p>
              <p className="text-gray-700 font-medium">Days</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500 mb-1">3-5</p>
              <p className="text-gray-700 font-medium">Team Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-600 mb-1">∞</p>
              <p className="text-gray-700 font-medium">Possibilities</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500 mb-1">
                Nov 20-22
              </p>
              <p className="text-gray-700 font-medium">At ESTIN Béjaïa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
