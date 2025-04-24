import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageIcon, SaveIcon } from 'lucide-react';
export const PostEditor = () => {
  const {
    id
  } = useParams();
  const isEditing = !!id;
  // Mock post data for editing
  const mockPost = isEditing ? {
    id: parseInt(id),
    title: 'Crochet Projects for Noodle Lovers',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    excerpt: 'A collection of creative crochet projects inspired by noodle dishes.',
    category: 'DIY',
    tags: ['crochet', 'crafts', 'food', 'diy'],
    featuredImage: "/cooking-free-template-for-figma-02.webp",
    status: 'Published',
    author: 'Wade Warren'
  } : {
    title: '',
    content: '',
    excerpt: '',
    category: '',
    tags: [] as string[],
    featuredImage: '',
    status: 'Draft',
    author: 'Admin User'
  };
  const [post, setPost] = useState(mockPost);
  const [tagInput, setTagInput] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setPost({
      ...post,
      [name]: value
    });
  };
  const handleTagAdd = () => {
    if (tagInput && !post.tags.includes(tagInput)) {
      setPost({
        ...post,
        tags: [...post.tags, tagInput]
      });
      setTagInput('');
    }
  };
  const handleTagRemove = (tagToRemove: string) => {
    setPost({
      ...post,
      tags: post.tags.filter(tag => tag !== tagToRemove)
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would save the post to your backend
    console.log('Saving post:', post);
    alert('Post saved successfully!');
  };
  return <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          {isEditing ? 'Edit Post' : 'Create New Post'}
        </h1>
        <div>
          <button type="button" className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            Preview
          </button>
          <button type="button" onClick={handleSubmit} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            <SaveIcon size={16} className="mr-2" />
            Save {post.status === 'Draft' ? 'Draft' : 'Post'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="mb-6 bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-700">
                  Post Title
                </label>
                <input type="text" name="title" id="title" value={post.title} onChange={handleChange} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" placeholder="Enter post title" />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="block mb-1 text-sm font-medium text-gray-700">
                  Content
                </label>
                <textarea name="content" id="content" rows={12} value={post.content} onChange={handleChange} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" placeholder="Write your post content here..."></textarea>
              </div>
              <div>
                <label htmlFor="excerpt" className="block mb-1 text-sm font-medium text-gray-700">
                  Excerpt
                </label>
                <textarea name="excerpt" id="excerpt" rows={3} value={post.excerpt} onChange={handleChange} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" placeholder="Brief summary of your post"></textarea>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Featured Image
              </h2>
            </div>
            <div className="p-6">
              {post.featuredImage ? <div className="mb-4">
                  <img src={post.featuredImage} alt="Featured" className="object-cover w-full h-48 rounded-lg" />
                </div> : <div className="p-12 text-center border-2 border-gray-300 border-dashed rounded-lg">
                  <div className="flex justify-center">
                    <ImageIcon size={48} className="text-gray-400" />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Drag and drop an image, or click to select
                  </p>
                  <button type="button" className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Upload Image
                  </button>
                </div>}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-6 bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">
                Post Settings
              </h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="status" className="block mb-1 text-sm font-medium text-gray-700">
                  Status
                </label>
                <select id="status" name="status" value={post.status} onChange={handleChange} className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                  <option>Draft</option>
                  <option>Published</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="category" className="block mb-1 text-sm font-medium text-gray-700">
                  Category
                </label>
                <select id="category" name="category" value={post.category} onChange={handleChange} className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                  <option value="">Select a category</option>
                  <option>Recipes</option>
                  <option>DIY</option>
                  <option>Career</option>
                  <option>Jobs</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block mb-1 text-sm font-medium text-gray-700">
                  Author
                </label>
                <select id="author" name="author" value={post.author} onChange={handleChange} className="block w-full py-2 pl-3 pr-10 mt-1 text-base border-gray-300 rounded-md focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                  <option>Admin User</option>
                  <option>Wade Warren</option>
                  <option>Robert Fox</option>
                  <option>Dianne Russell</option>
                  <option>Leslie Alexander</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map(tag => <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {tag}
                      <button type="button" onClick={() => handleTagRemove(tag)} className="ml-1.5 inline-flex text-gray-400 hover:text-gray-600">
                        &times;
                      </button>
                    </span>)}
                </div>
                <div className="flex">
                  <input type="text" value={tagInput} onChange={e => setTagInput(e.target.value)} className="block w-full border-gray-300 shadow-sm focus:ring-black focus:border-black sm:text-sm rounded-l-md" placeholder="Add a tag" onKeyPress={e => e.key === 'Enter' && handleTagAdd()} />
                  <button type="button" onClick={handleTagAdd} className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
