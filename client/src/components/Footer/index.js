import React from 'react';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">&copy;{currentYear} by Dylan Martin</div>
    </footer>
  );
};

export default Footer;
