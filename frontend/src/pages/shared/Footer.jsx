import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-2xl font-semibold">AstraNex</div>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#privacy"
            className="hover:text-teal-300 transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="hover:text-teal-300 transition duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#faq"
            className="hover:text-teal-300 transition duration-300"
          >
            FAQs
          </a>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-300 transition duration-300"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>
          Email:{" "}
          <a
            href="mailto:contact@astranex.com"
            className="hover:text-teal-300 transition duration-300"
          >
            contact@astranex.com
          </a>
        </p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  </footer>
  )
}
