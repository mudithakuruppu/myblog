import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './components/admin/AdminLayout';
import { Dashboard } from './components/admin/Dashboard';
import { PostManagement } from './components/admin/PostManagement';
import { PostEditor } from './components/admin/PostEditor';
import { CategoryManagement } from './components/admin/CategoryManagement';
import { MediaManagement } from './components/admin/MediaManagement';
import { Settings } from './components/admin/Settings';
import { Login } from './components/admin/Login';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return <Router basename="/myblog/">
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={isAuthenticated ? <Navigate to="/myblog/admin/dashboard" /> : <Login onLogin={handleLogin} />} />
        <Route path="/admin/*" element={isAuthenticated ? <AdminLayout onLogout={handleLogout}>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="posts" element={<PostManagement />} />
                  <Route path="posts/new" element={<PostEditor />} />
                  <Route path="posts/edit/:id" element={<PostEditor />} />
                  <Route path="categories" element={<CategoryManagement />} />
                  <Route path="media" element={<MediaManagement />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="*" element={<Navigate to="/myblog/admin/dashboard" />} />
                </Routes>
              </AdminLayout> : <Navigate to="/myblog/admin/login" />} />
      </Routes>
    </Router>;
}
