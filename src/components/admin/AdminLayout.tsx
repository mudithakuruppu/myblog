import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
interface AdminLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}
export const AdminLayout = ({
  children,
  onLogout
}: AdminLayoutProps) => {
  return <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header onLogout={onLogout} />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>;
};