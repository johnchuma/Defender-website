import React, { useState } from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string>('home');

  const links = [
    { id: 'home', label: 'Home', icon: <FaHome /> },
    { id: 'profile', label: 'Profile', icon: <FaUser /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> },
  ];

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-screen w-64 bg-gray-100 md:w-48 lg:w-64 p-5 shadow-lg">
        <ul className="space-y-4">
          {links.map((link) => (
            <li
              key={link.id}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors
                ${activeLink === link.id ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500 hover:bg-gray-200'}`}
              onClick={() => setActiveLink(link.id)}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="font-medium">{link.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area */}
      <div className="ml-64 md:ml-48 lg:ml-64 p-5">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
