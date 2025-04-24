import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, SearchIcon, EditIcon, TrashIcon } from 'lucide-react';
export const PostManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Mock data for the posts
  const posts = [{
    id: 1,
    title: 'Crochet Projects for Noodle Lovers',
    author: 'Wade Warren',
    date: 'Nov 17, 2023',
    status: 'Published',
    category: 'DIY'
  }, {
    id: 2,
    title: '10 Vegetarian Recipes To Eat This Month',
    author: 'Robert Fox',
    date: 'Nov 12, 2023',
    status: 'Published',
    category: 'Recipes'
  }, {
    id: 3,
    title: 'Full Guide to Becoming a Professional Chef',
    author: 'Dianne Russell',
    date: 'Nov 12, 2023',
    status: 'Published',
    category: 'Career'
  }, {
    id: 4,
    title: 'Simple & Delicious Vegetarian Lasagna',
    author: 'Leslie Alexander',
    date: 'Nov 12, 2023',
    status: 'Draft',
    category: 'Recipes'
  }, {
    id: 5,
    title: 'Plantain and Pinto Stew with Aji Verde',
    author: 'Courtney Henry',
    date: 'Nov 12, 2023',
    status: 'Published',
    category: 'Recipes'
  }, {
    id: 6,
    title: "We're Hiring a Communications Assistant!",
    author: 'Albert Flores',
    date: 'Nov 12, 2023',
    status: 'Published',
    category: 'Jobs'
  }];
  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.author.toLowerCase().includes(searchTerm.toLowerCase()) || post.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Posts</h1>
        <Link to="/admin/posts/new" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          <PlusIcon size={16} className="mr-2" />
          New Post
        </Link>
      </div>
      <div className="mb-8 bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon size={18} className="text-gray-400" />
              </div>
              <input type="text" className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:ring-black focus:border-black" placeholder="Search posts..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            </div>
            <div className="ml-4">
              <select className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                <option>All Categories</option>
                <option>Recipes</option>
                <option>DIY</option>
                <option>Career</option>
                <option>Jobs</option>
              </select>
            </div>
            <div className="ml-4">
              <select className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                <option>All Status</option>
                <option>Published</option>
                <option>Draft</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map(post => <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {post.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.author}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    <div className="flex justify-end space-x-2">
                      <Link to={`/admin/posts/edit/${post.id}`} className="text-gray-500 hover:text-gray-700">
                        <EditIcon size={18} />
                      </Link>
                      <button className="text-red-500 hover:text-red-700">
                        <TrashIcon size={18} />
                      </button>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing {filteredPosts.length} of {posts.length} posts
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md bg-gray-50">
                1
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
