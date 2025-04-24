import React from 'react';
import { UserIcon, LogOutIcon, BellIcon } from 'lucide-react';
interface HeaderProps {
  onLogout: () => void;
}
export const Header = ({
  onLogout
}: HeaderProps) => {
  return <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Admin Dashboard</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <BellIcon size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <UserIcon size={16} className="text-gray-600" />
            </div>
            <div className="ml-2 mr-4">
              <p className="text-sm font-medium">Admin User</p>
            </div>
            <button onClick={onLogout} className="p-2 rounded-full hover:bg-gray-100">
              <LogOutIcon size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>;
};