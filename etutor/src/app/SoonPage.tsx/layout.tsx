import React from 'react';
import NavbarComing from './components/NavbarComing';
import FooterComing from './components/FooterComing';
import '../styles/level.module.css'; // Import global styles if needed

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarComing /> {/* Navbar at the top */}
      <main className="flex-1">{children}</main> {/* Page content */}
      <FooterComing /> {/* Footer at the bottom */}
    </div>
  );
};

export default Layout;
