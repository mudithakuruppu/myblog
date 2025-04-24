import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, FileTextIcon, TagIcon, ImageIcon, SettingsIcon } from 'lucide-react';
export const Sidebar = () => {
  const navItems = [{
    name: 'Dashboard',
    path: '/admin/dashboard',
    icon: <HomeIcon size={20} />
  }, {
    name: 'Posts',
    path: '/admin/posts',
    icon: <FileTextIcon size={20} />
  }, {
    name: 'Categories',
    path: '/admin/categories',
    icon: <TagIcon size={20} />
  }, {
    name: 'Media',
    path: '/admin/media',
    icon: <ImageIcon size={20} />
  }, {
    name: 'Settings',
    path: '/admin/settings',
    icon: <SettingsIcon size={20} />
  }];
  return <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-800">Foodieland</h1>
        <p className="text-sm text-gray-500">Admin Panel</p>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map(item => <li key={item.name} className="px-2">
              <NavLink to={item.path} className={({
            isActive
          }) => `flex items-center px-4 py-3 rounded-lg mb-1 ${isActive ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>)}
        </ul>
      </nav>
    </div>;
};