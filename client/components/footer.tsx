"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-400">PitchUp</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering innovators to build the future through technology and
              creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Event</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Judges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Prizes
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Connect</h4>
            <div className="space-y-3">
              <p className="text-gray-300 text-sm">📧 bytecraft@estin.dz</p>
              <p className="text-gray-300 text-sm">📍 Estin</p>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://web.facebook.com/ByteCraftEstin"
                  className="text-teal-400 hover:text-orange-400 transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/bytecraft.club?igsh=MXN3Z3BhaXdmZ2JucQ%3D%3D&utm_source=qr"
                  className="text-teal-400 hover:text-orange-400 transition-colors"
                >
                  Instegram
                </a>
                <a
                  href="https://www.linkedin.com/company/bytecraft-club/posts/?feedView=all"
                  className="text-teal-400 hover:text-orange-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 a_zine@estin.dz. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
