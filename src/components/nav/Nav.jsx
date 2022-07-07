import React from 'react';
import "./nav.css"


function Nav({ currentPage, handlePageChange }) {
  return (
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse nav-items">
      <ul class="navbar-nav">

       <li>
         <a href="#home" data-toggle="collapse" data-target="#home #navbarNav" onClick={() => handlePageChange('Home')}
           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
       </li>

       <li>
         <a href="#MenuBars" data-toggle="collapse" data-target="#services #navbarNav" onClick={() => handlePageChange('MenuBars')}
           className={currentPage === 'MenuBars' ? 'nav-link active' : 'nav-link'}>Navs</a>
      </li>    

       <li>
         <a href="#Cards" data-toggle="collapse" data-target="#about #navbarNav" onClick={() => handlePageChange('Cards')}
           className={currentPage === 'Cards' ? 'nav-link active' : 'nav-link'}>Cards</a>
      </li>

       <li>
        <a href="#Blogs" data-bs-target="#navbarNav" onClick={() => handlePageChange('Blogs')}
          className={currentPage === 'Blogs' ? 'nav-link active' : 'nav-link'}>Blogs</a>
      </li>

      <li>
        <a href="#AdBanners" data-bs-target="#navbarNav" onClick={() => handlePageChange('AdBanners')}
          className={currentPage === 'AdBanners' ? 'nav-link active' : 'nav-link'}>Ad Banners</a>
      </li>

        <li>
       <a href="#Contact" data-bs-toggle="collapse" data-bs-target="#contact" onClick={() => handlePageChange('Contact')}
         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
     </li>

      </ul>
    </div>
  </div>
</nav>

);
}

export default Nav;