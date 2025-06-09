import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import EventAdmin from './pages/EventAdmin';
// App.js o index.js


function App() {
  const [currentPage, setCurrentPage] = useState('welcome');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'welcome' && <WelcomePage onNavigate={handleNavigate} />}
      {currentPage === 'admin' && <EventAdmin onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
