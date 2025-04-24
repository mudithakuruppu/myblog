
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between space-y-6 md:flex-row md:items-center md:space-y-0">
          <div>
            <Link to="/" className="text-xl font-bold">
              Foodieland
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-4 md:flex md:space-x-8">
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
        <div className="pt-8 mt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            © 2025 Foodieland. Powered by Wixze
          </p>
        </div>
      </div>
    </footer>;
};