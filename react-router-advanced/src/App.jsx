import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import BlogPost from './components/blogPost';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const isAuthenticated = false; 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog/:id' element = {<BlogPost/>} />
        <Route path="/profile/*" element={
          <ProtectedRoute element={Profile} isAuthenticated={isAuthenticated} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
