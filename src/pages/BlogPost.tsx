import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NewsletterSignup } from '../components/shared/NewsletterSignup';
import { BlogCard } from '../components/blog/BlogCard';
export const BlogPost = () => {
  const relatedPosts = [{
    id: 1,
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: "/cooking-free-template-for-figma-03.webp",
    author: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    date: '12 November 2021'
  }, {
    id: 2,
    title: 'Grilled 5 Spice Beef Cheesesteak',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: "/cooking-free-template-for-figma-02.webp",
    author: {
      name: 'Wade Warren',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
    },
    date: '12 November 2021'
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full mx-auto">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Article Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Full Guide to Becoming a Professional Chef
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" alt="John Smith" className="w-8 h-8 rounded-full" />
              <span className="text-gray-600">John Smith</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">15 March 2023</span>
            </div>
          </div>
          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus.
            </p>
            <img src="/cooking-free-template-for-figma-03.webp" alt="Professional chef cooking" className="w-full h-auto rounded-lg mb-8" />
            <div className="flex justify-end mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">SHARE THIS ON:</span>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <FacebookIcon size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <TwitterIcon size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How did you start out in the food industry?
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What do you like most about your job?
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Do you cook at home on your days off?
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </p>
            <blockquote className="border-l-4 border-gray-900 pl-4 my-8">
              <p className="text-xl font-medium text-gray-900 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio."
              </p>
            </blockquote>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What is the biggest misconception that people have about being a
              professional chef?
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar.
            </p>
          </div>
        </article>
        {/* Related Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Check out the delicious recipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(post => <BlogCard key={post.id} {...post} />)}
          </div>
        </section>
        {/* Newsletter */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>;
};