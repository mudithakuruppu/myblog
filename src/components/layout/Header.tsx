import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export const Header = () => {
  return <header className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Foodieland
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-900 hover:text-gray-600">
              Home
            </Link>
            <Link to="/recipes" className="text-gray-900 hover:text-gray-600">
              Recipes
            </Link>
            <Link to="/blog" className="text-gray-900 hover:text-gray-600">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-600">
              Contact
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-gray-600">
              About us
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <FacebookIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <TwitterIcon size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>;
};