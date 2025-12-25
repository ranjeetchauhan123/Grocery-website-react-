import React from 'react'
import { IoSend } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-zinc-100">
      <div className="max-w-[1400px] mx-auto px-10 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Gr<span className="text-orange-500">O</span>cify
            </h3>
            <p className="text-zinc-600 text-sm leading-6">
              Bred for a high content of beneficial substances.
              Our products are all fresh and healthy.
            </p>
            <p className="text-zinc-500 text-sm mt-6">
              © 2025 All Rights Reserved
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-zinc-600">
              <li className="hover:text-orange-500 cursor-pointer">About</li>
              <li className="hover:text-orange-500 cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-zinc-600">
              <li className="hover:text-orange-500 cursor-pointer">Support Center</li>
              <li className="hover:text-orange-500 cursor-pointer">Feedback</li>
              <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-zinc-600 text-sm mb-4">
              Questions or Feedback? <br />
              We'd love to hear from you.
            </p>

            <div className="flex items-center bg-white rounded-full overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
              />
              <button
                className="bg-orange-500 text-white px-5 py-3 text-xl hover:bg-orange-600 transition"
              >
                <IoSend />
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
