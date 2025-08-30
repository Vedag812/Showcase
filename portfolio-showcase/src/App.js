import React, { useState, Suspense } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import DetailsPage from './pages/DetailsPage';
import { sampleProjects } from './data/projects';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentPage('details');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Debug info - remove this later */}
        <div className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-2 py-1 rounded text-sm">
          Theme Debug: Check if this changes color
        </div>
        
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-lg">Loading 3D Environment...</div>
          </div>
        }>
          <ThreeBackground />
        </Suspense>
        
        <Navbar onHomeClick={handleBackToHome} />
        
        <main>
          {currentPage === 'home' && (
            <HomePage 
              projects={sampleProjects} 
              onProjectClick={handleProjectClick}
            />
          )}
          {currentPage === 'details' && selectedProject && (
            <DetailsPage 
              project={selectedProject} 
              onBack={handleBackToHome}
            />
          )}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;