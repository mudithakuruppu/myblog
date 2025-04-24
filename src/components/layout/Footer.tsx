import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <Link to="/" className="text-xl font-bold">
              Foodieland
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <nav className="grid grid-cols-2 md:flex md:space-x-8 gap-4">
            <Link to="/recipes" className="text-gray-500 hover:text-gray-900">
              Recipes
            </Link>
            <Link to="/blog" className="text-gray-500 hover:text-gray-900">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-900">
              Contact
            </Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-900">
              About us
            </Link>
          </nav>
          <div className="flex space-x-4">
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
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2020 Flowbase. Powered by WebFlow
          </p>
        </div>
      </div>
    </footer>;
};