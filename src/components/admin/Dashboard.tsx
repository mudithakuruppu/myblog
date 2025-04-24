import React from 'react';
import { FileTextIcon, UsersIcon, EyeIcon, MessageSquareIcon, TrendingUpIcon } from 'lucide-react';
export const Dashboard = () => {
  // Mock data for the dashboard
  const stats = [{
    title: 'Total Posts',
    value: '24',
    icon: <FileTextIcon size={20} />,
    color: 'bg-blue-100 text-blue-600'
  }, {
    title: 'Total Users',
    value: '12',
    icon: <UsersIcon size={20} />,
    color: 'bg-green-100 text-green-600'
  }, {
    title: 'Page Views',
    value: '3.4K',
    icon: <EyeIcon size={20} />,
    color: 'bg-purple-100 text-purple-600'
  }, {
    title: 'Comments',
    value: '42',
    icon: <MessageSquareIcon size={20} />,
    color: 'bg-yellow-100 text-yellow-600'
  }];
  const recentPosts = [{
    id: 1,
    title: 'Crochet Projects for Noodle Lovers',
    date: 'Nov 17, 2023',
    status: 'Published'
  }, {
    id: 2,
    title: '10 Vegetarian Recipes To Eat This Month',
    date: 'Nov 12, 2023',
    status: 'Published'
  }, {
    id: 3,
    title: 'Full Guide to Becoming a Professional Chef',
    date: 'Nov 12, 2023',
    status: 'Published'
  }, {
    id: 4,
    title: 'Simple & Delicious Vegetarian Lasagna',
    date: 'Nov 12, 2023',
    status: 'Draft'
  }];
  return <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-full ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">
                  {stat.title}
                </h3>
                <p className="text-2xl font-semibold text-gray-800">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>)}
      </div>
      <div className="bg-white rounded-lg shadow-sm mb-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-800">
              Traffic Overview
            </h2>
            <div className="flex items-center text-green-600">
              <TrendingUpIcon size={16} className="mr-1" />
              <span className="text-sm font-medium">+12.5%</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="h-64 flex items-center justify-center text-gray-400">
            Traffic chart would go here
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Recent Posts</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentPosts.map(post => <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href={`/admin/posts/edit/${post.id}`} className="text-black hover:text-gray-700">
                      Edit
                    </a>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};