import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
      
    <div>
      
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipe" element={<RecipeDetail />} />
      </Routes>
        </div>
        
      
  );
}

export default App