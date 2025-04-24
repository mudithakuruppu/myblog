import React, { useState } from 'react';
import { PlusIcon, EditIcon, TrashIcon } from 'lucide-react';
export const CategoryManagement = () => {
  const [categories, setCategories] = useState([{
    id: 1,
    name: 'Recipes',
    slug: 'recipes',
    count: 3
  }, {
    id: 2,
    name: 'DIY',
    slug: 'diy',
    count: 1
  }, {
    id: 3,
    name: 'Career',
    slug: 'career',
    count: 1
  }, {
    id: 4,
    name: 'Jobs',
    slug: 'jobs',
    count: 1
  }]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    slug: ''
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    if (editingId !== null) {
      setCategories(categories.map(cat => cat.id === editingId ? {
        ...cat,
        [name]: value
      } : cat));
    } else {
      setNewCategory({
        ...newCategory,
        [name]: value
      });
    }
  };
  const handleAddCategory = () => {
    if (newCategory.name && newCategory.slug) {
      setCategories([...categories, {
        id: Math.max(...categories.map(c => c.id)) + 1,
        name: newCategory.name,
        slug: newCategory.slug,
        count: 0
      }]);
      setNewCategory({
        name: '',
        slug: ''
      });
    }
  };
  const handleEditClick = (id: number) => {
    setEditingId(id);
  };
  const handleSaveEdit = () => {
    setEditingId(null);
  };
  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };
  return <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Categories</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                All Categories
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Slug
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Count
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {categories.map(category => <tr key={category.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingId === category.id ? <input type="text" name="name" value={category.name} onChange={handleInputChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" /> : <div className="text-sm font-medium text-gray-900">
                            {category.name}
                          </div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {editingId === category.id ? <input type="text" name="slug" value={category.slug} onChange={handleInputChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" /> : <div className="text-sm text-gray-500">
                            {category.slug}
                          </div>}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {category.count}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          {editingId === category.id ? <button onClick={handleSaveEdit} className="text-green-500 hover:text-green-700">
                              Save
                            </button> : <button onClick={() => handleEditClick(category.id)} className="text-gray-500 hover:text-gray-700">
                              <EditIcon size={18} />
                            </button>}
                          <button onClick={() => handleDeleteCategory(category.id)} className="text-red-500 hover:text-red-700">
                            <TrashIcon size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Add New Category
              </h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" name="name" id="name" value={newCategory.name} onChange={handleInputChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Category name" />
              </div>
              <div className="mb-6">
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input type="text" name="slug" id="slug" value={newCategory.slug} onChange={handleInputChange} className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md" placeholder="category-slug" />
                <p className="mt-1 text-xs text-gray-500">
                  The "slug" is the URL-friendly version of the name. It should
                  be all lowercase and contain only letters, numbers, and
                  hyphens.
                </p>
              </div>
              <button type="button" onClick={handleAddCategory} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                <PlusIcon size={16} className="mr-2" />
                Add Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};