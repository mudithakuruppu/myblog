
import { SearchIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { BlogCard } from '../components/blog/BlogCard';
import { NewsletterSignup } from '../components/shared/NewsletterSignup';
const posts = [{
  id: 1,
  title: 'Crochet Projects for Noodle Lovers',
  author: { name: 'Wade Warren', avatar: 'https://via.placeholder.com/256' },
  date: 'Nov 17, 2023',
  status: 'Published',
  category: 'DIY',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '/cooking-free-template-for-figma-02.webp'
}, {
  id: 2,
  title: '10 Vegetarian Recipes To Eat This Month',
  author: { name: 'Robert Fox', avatar: 'https://via.placeholder.com/256' },
  date: 'Nov 12, 2023',
  status: 'Published',
  category: 'Recipes',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhcmlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
}, {
  id: 3,
  title: 'Full Guide to Becoming a Professional Chef',
  author: { name: 'Dianne Russell', avatar: 'https://via.placeholder.com/256' },
  date: 'Nov 12, 2023',
  status: 'Published',
  category: 'Career',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '/cooking-free-template-for-figma-02.webp'
}, {
  id: 4,
  title: 'Simple & Delicious Vegetarian Lasagna',
  author: { name: 'Leslie Alexander', avatar: 'https://via.placeholder.com/256' },
  date: 'Nov 12, 2023',
  status: 'Draft',
  category: 'Recipes',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhcmlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
}, {
  id: 5,
  title: 'Plantain and Pinto Stew with Aji Verde',
  author: { name: 'Courtney Henry', avatar: 'https://via.placeholder.com/256' },
  date: 'Nov 12, 2023',
  status: 'Published',
  category: 'Recipes',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: '/cooking-free-template-for-figma-02.webp'
}, {
  id: 6,
  title: "We're Hiring a Communications Assistant!",
  author: { name: 'Albert Flores', avatar: 'https://via.placeholder.com/256' },
  date: 'Nov 12, 2023',
  status: 'Published',
  category: 'Jobs',
  excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnZXRhcmlhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
}];
export const Blog = () => {
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Blog & Article</h1>
            <p className="max-w-2xl mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <div className="max-w-xl mx-auto mt-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon className="w-5 h-5 text-gray-400" />
                </div>
                <input type="text" placeholder="Search article, news or recipe..." className="block w-full py-3 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black" />
              </div>
            </div>
          </div>
        </div>
        {/* Blog Grid */}
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => <BlogCard key={post.id} {...post} />)}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex space-x-2" aria-label="Pagination">
              <button className="px-3 py-1 text-white bg-black rounded-md">
                1
              </button>
              <button className="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-100">
                4
              </button>
              <button className="px-3 py-1 text-gray-700 rounded-md hover:bg-gray-100">
                5
              </button>
            </nav>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>;
};
