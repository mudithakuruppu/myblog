import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { NewsletterSignup } from '../components/shared/NewsletterSignup';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from 'lucide-react';
export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };
  return <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <div className="relative bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Have a question or feedback? We'd love to hear from you. Fill
                out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm" required />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea id="message" name="message" rows={6} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm" required></textarea>
                  </div>
                  <div>
                    <button type="submit" className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-gray-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Visit Us
                    </h3>
                    <p className="mt-1 text-gray-600">
                      123 Culinary Street
                      <br />
                      Foodie District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-gray-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Call Us
                    </h3>
                    <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-gray-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Email Us
                    </h3>
                    <p className="mt-1 text-gray-600">hello@foodieland.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 text-gray-600 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Office Hours
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
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