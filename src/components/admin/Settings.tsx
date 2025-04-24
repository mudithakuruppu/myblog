import React, { useState } from 'react';
import { SaveIcon } from 'lucide-react';
export const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'Foodieland',
    siteDescription: 'A food blog with delicious recipes and culinary insights.',
    siteUrl: 'https://foodieland.com',
    adminEmail: 'admin@foodieland.com',
    postsPerPage: '10',
    enableComments: true,
    moderateComments: true,
    socialLinks: {
      facebook: 'https://facebook.com/foodieland',
      twitter: 'https://twitter.com/foodieland',
      instagram: 'https://instagram.com/foodieland'
    }
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value,
      type
    } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setSettings({
        ...settings,
        [parent]: {
          ...(settings[parent as keyof typeof settings] as Record<string, string>),
          [child]: value
        }
      });
    } else {
      setSettings({
        ...settings,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the settings to your backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>
        <button type="button" onClick={handleSubmit} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          <SaveIcon size={16} className="mr-2" />
          Save Settings
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">
            General Settings
          </h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                  Site Name
                </label>
                <div className="mt-1">
                  <input type="text" name="siteName" id="siteName" value={settings.siteName} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="siteUrl" className="block text-sm font-medium text-gray-700">
                  Site URL
                </label>
                <div className="mt-1">
                  <input type="url" name="siteUrl" id="siteUrl" value={settings.siteUrl} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
                  Site Description
                </label>
                <div className="mt-1">
                  <textarea id="siteDescription" name="siteDescription" rows={3} value={settings.siteDescription} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">
                  Admin Email
                </label>
                <div className="mt-1">
                  <input type="email" name="adminEmail" id="adminEmail" value={settings.adminEmail} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="postsPerPage" className="block text-sm font-medium text-gray-700">
                  Posts Per Page
                </label>
                <div className="mt-1">
                  <input type="number" name="postsPerPage" id="postsPerPage" min="1" max="50" value={settings.postsPerPage} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800">
                Comment Settings
              </h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="enableComments" name="enableComments" type="checkbox" checked={settings.enableComments} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="enableComments" className="font-medium text-gray-700">
                      Enable Comments
                    </label>
                    <p className="text-gray-500">
                      Allow visitors to comment on blog posts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="moderateComments" name="moderateComments" type="checkbox" checked={settings.moderateComments} onChange={handleChange} className="focus:ring-black h-4 w-4 text-black border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="moderateComments" className="font-medium text-gray-700">
                      Moderate Comments
                    </label>
                    <p className="text-gray-500">
                      Review comments before they are published.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-800">
                Social Media
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">
                    Facebook
                  </label>
                  <div className="mt-1">
                    <input type="url" name="socialLinks.facebook" id="facebook" value={settings.socialLinks.facebook} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
                    Twitter
                  </label>
                  <div className="mt-1">
                    <input type="url" name="socialLinks.twitter" id="twitter" value={settings.socialLinks.twitter} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">
                    Instagram
                  </label>
                  <div className="mt-1">
                    <input type="url" name="socialLinks.instagram" id="instagram" value={settings.socialLinks.instagram} onChange={handleChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>;
};