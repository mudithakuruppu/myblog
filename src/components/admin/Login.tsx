import React, { useState } from 'react';
import { LockIcon, UserIcon } from 'lucide-react';
interface LoginProps {
  onLogin: () => void;
}
export const Login = ({
  onLogin
}: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials against an API
    // In a real app, you would validate credentials against an API
    // For this demo, we'll just check for any input
    if (username === 'admin' && password === 'password') {
      onLogin();
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold text-center text-gray-900">
            Foodieland
          </h1>
          <h2 className="mt-6 text-2xl font-bold text-center text-gray-900">
            Admin Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <UserIcon size={18} className="text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="relative block w-full px-10 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LockIcon size={18} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="relative block w-full px-10 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-black border border-transparent rounded-md group hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
