import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Prints } from './pages/Prints';
import { Shop } from './pages/Shop';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Tutorials } from './pages/Tutorials';
import { Tutorial } from './pages/Tutorial';
import { Resources } from './pages/Resources';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Admin/Dashboard';
import { PageBuilder } from './pages/Admin/PageBuilder/PageBuilder';
import { MediaLibrary } from './pages/Admin/MediaLibrary/MediaLibrary';
import { CommunityHome } from './pages/Community/CommunityHome';
import { GroupPage } from './pages/Community/GroupPage';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { supabase } from './lib/supabase';
import { useAuthStore } from './store/authStore';

function App() {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/prints" element={<MainLayout><Prints /></MainLayout>} />
        <Route path="/shop" element={<MainLayout><Shop /></MainLayout>} />
        <Route path="/blog" element={<MainLayout><Blog /></MainLayout>} />
        <Route path="/blog/:id" element={<MainLayout><BlogPost /></MainLayout>} />
        <Route path="/tutorials" element={<MainLayout><Tutorials /></MainLayout>} />
        <Route path="/tutorials/:id" element={<MainLayout><Tutorial /></MainLayout>} />
        <Route path="/resources" element={<MainLayout><Resources /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/login" element={<MainLayout><Login /></MainLayout>} />
        
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route path="pages" element={<PageBuilder />} />
          <Route path="media" element={<MediaLibrary />} />
        </Route>

        <Route path="/community" element={<MainLayout><CommunityHome /></MainLayout>} />
        <Route path="/community/groups/:groupId" element={<MainLayout><GroupPage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;