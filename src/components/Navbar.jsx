import React, { useState } from 'react';
import NavTabs from './nav/Nav';
import MenuBars from './menuBars/MenuBars';
import Home from './home/Home'
import Blogs from './blogs/Blogs';
import Cards from './cards/Cards';
import Contact from './contact/Contact';
import AdBanners from './adBanners/AdBanners';

export default function NavContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'MenuBars') {
      return <MenuBars />;
    }
    if (currentPage === 'Cards') {
      return <Cards />;
    }
    if (currentPage === 'Blogs') {
      return <Blogs />;
    }

    if (currentPage === 'AdBanners') {
      return <AdBanners />;
    }

    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}