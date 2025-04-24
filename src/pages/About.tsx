import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NewsletterSignup } from '../components/shared/NewsletterSignup';
export const About = () => {
  const teamMembers = [{
    name: 'Wade Warren',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    name: 'Robert Fox',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    name: 'Leslie Alexander',
    role: 'Content Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    name: 'Dianne Russell',
    role: 'Food Photographer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }];
  const stats = [{
    label: 'Recipes Published',
    value: '850+'
  }, {
    label: 'Active Users',
    value: '2M+'
  }, {
    label: 'Positive Reviews',
    value: '98%'
  }, {
    label: 'Social Followers',
    value: '1.2M'
  }];
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                About Foodieland
              </h1>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Welcome to Foodieland, where passion for cooking meets the joy
                of sharing. We're dedicated to bringing you the best recipes and
                culinary insights.
              </p>
            </div>
          </div>
        </div>
        {/* Mission Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img src="/cooking-free-template-for-figma-03.webp" alt="Our Mission" className="rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-4">
                  Our mission is to inspire home cooks and food enthusiasts to
                  explore the world of culinary arts. We believe that cooking is
                  not just about preparing meals; it's about creating
                  experiences and bringing people together.
                </p>
                <p className="text-gray-600">
                  Since our founding in 2020, we've been committed to sharing
                  recipes that are not only delicious but also accessible to
                  cooks of all skill levels.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(stat => <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                </div>)}
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Meet Our Team
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                The passionate individuals behind Foodieland who work tirelessly
                to bring you the best culinary content.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map(member => <div key={member.name} className="text-center">
                  <div className="relative">
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>)}
            </div>
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